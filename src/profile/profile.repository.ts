import { Repository, Entity, EntityRepository } from "typeorm";
import { Profile } from "./profile.entity";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { ProfileStatus } from "./profile.model";

@EntityRepository(Profile)
export class ProfileRepository extends Repository<Profile>{
    async CreateProfile(createProfileDto:CreateProfileDto):Promise<Profile>{
        const {sid,title,description} = createProfileDto;
        const profile = new Profile();
        profile.sid=sid;
        profile.title=title;
        profile.description=description;
        profile.status= ProfileStatus.OPEN;
        await profile.save();

        return profile;
    }
}