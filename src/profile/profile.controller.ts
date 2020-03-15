import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Profile } from './profile.model';
import { CreateProfileDto } from './dto/create-profile.dto';

@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService) { }

    @Get()
    getAllProfile(): Profile[] {
        return this.profileService.getAllProfile();
    }

    @Post()
    createProfile(@Body() CreateProfileDto: CreateProfileDto): Profile {
        return this.profileService.createProfile(CreateProfileDto);
    }


}
