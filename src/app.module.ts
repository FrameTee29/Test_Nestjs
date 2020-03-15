import { Module } from '@nestjs/common';
import { ProfileModule } from './profile/profile.module';
import { DatabaseModule } from './database/database.module';

@Module({



  imports: [ProfileModule, DatabaseModule],
})
export class AppModule {}
