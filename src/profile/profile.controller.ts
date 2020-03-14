import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Profile } from './profile.model';

@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService) { }

    @Get()
    getAllProfile(): Profile[] {
        return this.profileService.getAllProfile();
    }

    @Post()
    createProfile(
        @Body('sid') sid: string,
        @Body('title') title: string,
        @Body('description') description: string) {
       
           return this.profileService.createProfile(sid,title,description);
    }
}
