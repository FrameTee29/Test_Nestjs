import { Module } from '@nestjs/common';
import { ProfileModule } from './profile/profile.module';
import { DatabaseModule } from './database/database.module';
import { Database } from './database';

@Module({



  imports: [ProfileModule, DatabaseModule],



  providers: [Database]
})
export class AppModule {}
