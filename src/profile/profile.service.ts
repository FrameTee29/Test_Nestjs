import { Injectable, Get } from '@nestjs/common';
import { Profile, ProfileStatus } from './profile.model';
import * as uuid from 'uuid/v1';
import { CreateProfileDto } from './dto/create-profile.dto';

@Injectable()
export class ProfileService {
    private profiles: Profile[] = [];


    getAllProfile(): Profile[] {
        return this.profiles;
    }

    createProfile(CreateProfileDto: CreateProfileDto): Profile {
        const {sid,title,description} = CreateProfileDto;

        const profile: Profile = {
            sid,
            title,
            description,
            status: ProfileStatus.OPEN,
        }
        this.profiles.push(profile);
        return profile;
    }
}
