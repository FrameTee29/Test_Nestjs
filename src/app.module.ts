import { Module } from '@nestjs/common';
import { ProfileModule } from './profile/profile.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),
    ProfileModule],
})
export class AppModule {}
