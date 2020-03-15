import { ProfileStatus } from "../profile.model";

export class GetProfileFilterDto{
    sid:string;
    status: ProfileStatus;
    search:string;
}