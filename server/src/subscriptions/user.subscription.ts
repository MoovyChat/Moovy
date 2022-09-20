import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

import { User } from '../entities/User';

@EventSubscriber()
export class userSubscriber implements EntitySubscriberInterface<User> {}
