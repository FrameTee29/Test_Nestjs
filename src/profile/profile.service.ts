import { Injectable, Get, NotFoundException } from '@nestjs/common';
import * as uuid from 'uuid/v1';
import { CreateProfileDto } from './dto/create-profile.dto';
import { GetProfileFilterDto } from './dto/get-profile-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileRepository } from './profile.repository';
import { Profile } from './profile.entity';
import { ProfileStatus } from './profile.model';

@Injectable()
export class ProfileService {
    constructor(
        @InjectRepository(ProfileRepository)
        private profileReppository: ProfileRepository) { }
    


    getAllProfile() {
        return this.profileReppository.find();
    }

    getProfiles(filterDto : GetProfileFilterDto):Promise<Profile[]>{
        
        return this.profileReppository.getProfiles(filterDto);
    }

    async getProfileBySid(sid: string) {
        const found = await this.profileReppository.findOne(sid);
        if (!found) {
            throw new NotFoundException(`Profile with sid "${sid}" not found`);
        }

        return found;
    }

    async CreateProfile(createProfileDto: CreateProfileDto) {
        return this.profileReppository.CreateProfile(createProfileDto);
    }

    async deleteProfile(sid: string): Promise<void> {
        const result = await this.profileReppository.delete(sid);
        console.log(result);
        if (result.affected === 0) {
            throw new NotFoundException(`Profile with sid "${sid}" not found`)
        }
    }

    async updateProfileStatus(sid: string, status: ProfileStatus) {
        const profile = this.getProfileBySid(sid);
        (await profile).status = status;
        (await profile).save();

        return profile;
    }
}

