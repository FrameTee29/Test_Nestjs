import { Controller, Get, Post, Body, Param } from '@nestjs/common';
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

    @Get('/:sid')
    getProfileBySid(@Param('sid') sid:string){
        return this.profileService.getProfileBySid(sid);
    }

    @Post()
    createProfile(@Body() CreateProfileDto: CreateProfileDto): Profile {
        return this.profileService.createProfile(CreateProfileDto);
    }


}
