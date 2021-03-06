import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { GetProfileFilterDto } from './dto/get-profile-filter.dto';
import { ProfileStatusValidationPipe } from './pipes/profile-status-validation.pipe';
import { ProfileStatus } from './profile.model';
import { Profile } from './profile.entity'

@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService) { }

    @Get()
    getAllProfile(@Query() filterDto: GetProfileFilterDto) {
        return this.profileService.getProfiles(filterDto);

    }

    @Get('/:sid')
    getProfileBySid(@Param('sid', ParseIntPipe) sid: string): Promise<Profile> {
        return this.profileService.getProfileBySid(sid);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createProfile(@Body() CreateProfileDto: CreateProfileDto): Promise<Profile> {
        return this.profileService.CreateProfile(CreateProfileDto);
    }

    @Delete('/:sid')
    deleteProfile(@Param('sid') sid: string) {
        this.profileService.deleteProfile(sid);
    }

    @Patch('/:sid/status')
    updateProfileStatus(
        @Param('sid') sid: string,
        @Body('status', ProfileStatusValidationPipe) status: ProfileStatus): Promise<Profile> {
        return this.profileService.updateProfileStatus(sid, status);
    }
}
