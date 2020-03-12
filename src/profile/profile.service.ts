import { Injectable, Get } from '@nestjs/common';

@Injectable()
export class ProfileService {
    private profile = [];


    getAllProfile(){
        return this.profile;
    }

}
