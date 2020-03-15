import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileRepository } from './profile.repository';


@Module({
  controllers: [ProfileController],
  providers: [ProfileService,],
  imports: [
    TypeOrmModule.forFeature([ProfileRepository])
  ]
})
export class ProfileModule {}
