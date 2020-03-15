import { PipeTransform, BadRequestException } from "@nestjs/common";
import { ProfileStatus } from "../profile.model";

export class ProfileStatusValidationPipe implements PipeTransform{
readonly allowedStatus=[
    ProfileStatus.OPEN,
    ProfileStatus.IN_PROGRESS,
    ProfileStatus.DONE
];

    transform(value: any ){
        value = value.toUpperCase();

        if(!this.isStatusValid(value))
        {
            throw new BadRequestException(`"${value}" is an invalid status`);
        }
        return value;
    }

    private isStatusValid(status: any){
      const idx = this.allowedStatus.indexOf(status);
      return idx !== -1;
    }
}