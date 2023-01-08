import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import { Comment } from './Comment';
import { Reply } from './Reply';
import { User } from './User';

@ObjectType()
@Entity()
// Used to store the likes of the comments by other users.
export class LikeNotifications extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => String)
  id!: string;

  // To whom notifications are added to.
  @Field(() => String)
  @PrimaryColumn()
  toUserId!: string;

  // To whom notifications are added to.
  @Field(() => String)
  @Column()
  toUserNickName!: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  commentId!: string | null;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  replyId: string | null;

  // Username of the user who liked the comment of the logged in user.
  @Field(() => String)
  @PrimaryColumn()
  fromUser!: string;

  // Custom message to be displayed in notifications.
  @Field(() => String)
  @Column()
  message!: string;

  @Field(() => String)
  @Column()
  fromUserPhotoUrl!: string;

  @Field(() => Boolean)
  @Column()
  isRead!: boolean;

  @ManyToOne(() => Comment, (comment) => comment.likeNotifications)
  comment: Comment;

  @ManyToOne(() => Reply, (reply) => reply.likeNotifications)
  reply: Reply;

  @ManyToOne(() => User, (user) => user.likeNotifications)
  toUser: User;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => String, { nullable: true })
  @DeleteDateColumn()
  deletedAt?: Date;
}
