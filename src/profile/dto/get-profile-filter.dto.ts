import { ProfileStatus } from "../profile.model";

export class GetProfileFilterDto{
    status: ProfileStatus;
    search:string;
}