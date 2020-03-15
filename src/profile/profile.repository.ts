import { Repository, Entity, EntityRepository } from "typeorm";
import { Profile } from "./profile.entity";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { ProfileStatus } from "./profile.model";
import { GetProfileFilterDto } from "./dto/get-profile-filter.dto";

@EntityRepository(Profile)
export class ProfileRepository extends Repository<Profile>{
    async getProfiles(filterDto : GetProfileFilterDto):Promise<Profile[]>{
        const {status,search} = filterDto;

        const query = this.createQueryBuilder('profile');

        if(status){
            query.andWhere('profile.status = :status',{status});
        }

        if(search){
            query.andWhere('profile.title LIKE :search OR profile.description LIKE :search',{search:`%${search}%`}) 
        }
        const profiles = await query.getMany();
        return profiles;
    }

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