import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import {ProfileProviders} from './profile.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [ProfileController],
  providers: [...ProfileProviders,ProfileService,],
  imports: [DatabaseModule]
})
export class ProfileModule {}
