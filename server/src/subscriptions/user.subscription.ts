import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

import { Users } from '../entities/Users';

@EventSubscriber()
export class userSubscriber implements EntitySubscriberInterface<Users> {}
