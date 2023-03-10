import { Contact } from '../entities/Contact';
import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import { In } from 'typeorm';
import { conn } from '../dataSource';

@Resolver()
export class ContactResolver {
  @Query(() => [Contact])
  async getAllMessages(
    @Arg('limit', () => Int) limit: number,
    @Arg('read', () => Boolean, { nullable: true }) read: boolean | null,
    @Arg('page', () => Int, { defaultValue: 1 }) page: number | 1
  ): Promise<Contact[]> {
    const query = conn
      .getRepository(Contact)
      .createQueryBuilder('contact')
      .orderBy('contact.createdAt', 'DESC');
    if (read !== null) query.where('contact.read = :read', { read });
    const contacts = query
      .offset((page - 1) * limit)
      .limit(limit)
      .getMany();
    return contacts;
  }

  @Query(() => [Contact])
  async getUnreadMessages(
    @Arg('limit', () => Int) limit: number,
    @Arg('page', () => Int, { defaultValue: 1 }) page: number | 1
  ): Promise<Contact[]> {
    const contacts = conn
      .getRepository(Contact)
      .createQueryBuilder('contact')
      .where('contact.read = :read', { read: false })
      .orderBy('contact.createdAt', 'DESC')
      .offset((page - 1) * limit)
      .limit(limit)
      .getMany();
    return contacts;
  }

  @Mutation(() => Contact)
  async createMessage(
    @Arg('name') name: string,
    @Arg('email') email: string,
    @Arg('subject') subject: string,
    @Arg('message') message: string
  ): Promise<Contact> {
    const contactRes = await conn
      .createQueryBuilder()
      .insert()
      .into(Contact)
      .values([{ name, email, message, subject, read: false }])
      .returning('*')
      .execute();
    return contactRes.raw[0];
  }

  @Mutation(() => Contact)
  async markMessageAsRead(@Arg('id') id: string): Promise<Contact> {
    const contact = await conn.getRepository(Contact).findOne({
      where: { id },
    });
    if (!contact) {
      throw new Error(`Contact with id ${id} not found`);
    }
    contact.read = true;
    await conn.manager.save(contact);
    return contact;
  }

  @Mutation(() => [Contact])
  async markSelectedMessagesAsRead(
    @Arg('ids', () => [String]) ids: string[]
  ): Promise<Contact[]> {
    const contacts = await conn.getRepository(Contact).findBy({ id: In(ids) });

    if (!contacts || !contacts.length) {
      throw new Error(`No contacts found for the provided ids`);
    }
    const updatedContacts = contacts.map((contact) => {
      contact.read = true;
      return contact;
    });
    await conn.manager.save(updatedContacts);
    return updatedContacts;
  }

  @Mutation(() => Boolean)
  async deleteMessages(
    @Arg('ids', () => [String]) ids: string[]
  ): Promise<boolean> {
    const result = await conn
      .createQueryBuilder()
      .delete()
      .from(Contact)
      .where('id IN (:...ids)', { ids })
      .execute();
    return result.affected !== 0;
  }
}
