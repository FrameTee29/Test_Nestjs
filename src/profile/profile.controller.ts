import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { GetProfileFilterDto } from './dto/get-profile-filter.dto';
import { ProfileStatusValidationPipe } from './pipes/profile-status-validation.pipe';
import { ProfileStatus} from './profile.model';
import {Profile} from './profile.entity'

@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService) { }

    // @Get()
    // getAllProfile(@Query() filterDto: GetProfileFilterDto) {
    //     if (Object.keys(filterDto).length) {
    //         return this.profileService.getProfileWithFilters(filterDto);
    //     }
    //     else {
    //         return this.profileService.getAllProfile();
    //     }
    // }

    @Get('/:sid')
    getProfileBySid(@Param('sid',ParseIntPipe) sid:number):Promise<Profile> {
        return this.profileService.getProfileBySid(sid);
    }

    // @Post()
    // @UsePipes(ValidationPipe)
    // createProfile(@Body() CreateProfileDto: CreateProfileDto): Profile {
    //     return this.profileService.createProfile(CreateProfileDto);
    // }

    // @Delete('/:sid')
    // deleteProfile(@Param('sid') sid: string): void {
    //     this.profileService.deleteProfile(sid);
    // }

    // @Patch('/:sid/status')
    // updateProfileStatus(
    //     @Param('sid') sid: string,
    //     @Body('status', ProfileStatusValidationPipe ) status: ProfileStatus) {
    //     return this.profileService.updateProfileStatus(sid, status);
    // }
}
