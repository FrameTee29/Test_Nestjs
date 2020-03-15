import { Connection, Repository } from 'typeorm';
import { Profile } from './profile.entity';

export const ProfileProviders = [
  {
    provide: 'PROFILE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Profile),
    inject: ['DATABASE_CONNECTION'],
  },
];