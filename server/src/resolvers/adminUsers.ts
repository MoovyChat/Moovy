import { Arg, Mutation, Query, Resolver } from 'type-graphql';

import { AdminUser } from '../entities/Admin';
import { Users } from '../entities/Users';

@Resolver()
export class AdminResolver {
  @Query(() => [AdminUser])
  getAdminUsers(): Promise<AdminUser[]> {
    return AdminUser.find();
  }

  @Mutation(() => AdminUser)
  async setAdmin(
    @Arg('userId', () => String) userId: string,
    @Arg('role', () => String) role: string
  ): Promise<AdminUser> {
    // Find the user with the given ID
    const user = await Users.findOneOrFail({ where: { id: userId } });

    // Create or update the admin record
    let admin = await AdminUser.findOne({ where: { userId } });
    if (!admin) {
      admin = new AdminUser();
      admin.userId = userId;
    }
    admin.role = role;
    admin.user = user;

    // Save the admin record
    await admin.save();

    return admin;
  }
}
