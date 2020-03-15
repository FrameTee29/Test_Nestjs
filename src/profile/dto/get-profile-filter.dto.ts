import { ProfileStatus } from "../profile.model";
import { IsOptional, IsIn, IsNotEmpty } from "class-validator";

export class GetProfileFilterDto {
    @IsOptional()
    sid: string;

    @IsOptional()
    @IsIn([
        ProfileStatus.OPEN,
        ProfileStatus.IN_PROGRESS,
        ProfileStatus.DONE
    ])
    status: ProfileStatus;

    @IsOptional()
    @IsNotEmpty()
    search: string;
}