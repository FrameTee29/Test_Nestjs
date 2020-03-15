import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Profile ,ProfileStatus} from './profile.model';
import { CreateProfileDto } from './dto/create-profile.dto';
import { stringify } from 'querystring';

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

    @Delete('/:sid')
    deleteProfile(@Param('sid') sid: string):void{
        this.profileService.deleteProfile(sid);
    }

    @Patch('/:sid/status')
    updateProfileStatus(@Param('sid') sid:string ,@Body('status') status: ProfileStatus){
        return this.profileService.updateProfileStatus(sid,status);
    }
}
