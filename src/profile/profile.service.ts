import { Injectable, Get, NotFoundException } from '@nestjs/common';
import { Profile, ProfileStatus } from './profile.model';
import * as uuid from 'uuid/v1';
import { CreateProfileDto } from './dto/create-profile.dto';
import { GetProfileFilterDto } from './dto/get-profile-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileRepository } from './profile.repository';

@Injectable()
export class ProfileService {
    constructor(
        @InjectRepository(ProfileRepository)
        private profileReppository: ProfileRepository) { }
    // private profiles: Profile[] = [];


    // getAllProfile(): Profile[] {
    //     return this.profiles;
    // }

    // getProfileWithFilters(filterDto: GetProfileFilterDto) {
    //     const { sid,status, search } = filterDto;

    //     let profiles = this.getAllProfile();

    //     if (sid) {
    //         profiles = profiles.filter(profile => profile.sid === sid)
    //     }

    //     if (status) {
    //         profiles = profiles.filter(profile => profile.status === status)
    //     }

    //     if (search) {
    //         profiles = profiles.filter(profile => 
    //             profile.title.includes(search) || 
    //             profile.description.includes(search));
    //     }

    //     return profiles;
    // }

    getProfileBySid(sid: number) {
        const found = this.profileReppository.findOne(sid);
        if (!found) {
            throw new NotFoundException(`Profile with sid "${sid}" not found`);
        }

        return found;
    }
    // getProfileBySid(sid: string): Profile {
    //     const found = this.profiles.find(profile => profile.sid === sid);

    //     if(!found){
    //         throw new NotFoundException(`Profile with sid "${sid}" not found`);
    //     }

    //     return found;
    // }

    // createProfile(CreateProfileDto: CreateProfileDto): Profile {
    //     const { sid, title, description } = CreateProfileDto;

    //     const profile: Profile = {
    //         sid,
    //         title,
    //         description,
    //         status: ProfileStatus.OPEN,
    //     }
    //     this.profiles.push(profile);
    //     return profile;
    // }

    // deleteProfile(sid: string) {
    //     const found = this.getProfileBySid(sid);
    //     this.profiles = this.profiles.filter(profile => profile.sid !== found.sid)
    // }

    // updateProfileStatus(sid: string, status: ProfileStatus) {
    //     const profile = this.getProfileBySid(sid);
    //     profile.status = status;
    //     return profile;
    // }
}

