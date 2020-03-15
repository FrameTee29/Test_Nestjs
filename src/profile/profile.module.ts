import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { DatabaseModule } from './database/database.module';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService],
  imports: [DatabaseModule]
})
export class ProfileModule {}
