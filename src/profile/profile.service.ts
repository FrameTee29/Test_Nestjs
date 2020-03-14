import { Injectable, Get } from '@nestjs/common';
import {Profile, ProfileStatus} from './profile.model';
import * as uuid from 'uuid/v1'

@Injectable()
export class ProfileService{
    private profiles: Profile[] = [];


    getAllProfile(): Profile[]{
        return this.profiles;
    }

    createProfile(sid:string,title:string, description:string){
        const profile:Profile={
            sid,
            title,
            description,
            status: ProfileStatus.OPEN,
        }
        this.profiles.push(profile);
        return profile;
    }
}
