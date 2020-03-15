
import {Profile} from './profile.entity';

export const ProfileProviders = [
  {
    provide: 'PROFILE_REPOSITORY',
    useValue: Profile,
  },
];