import {IsNotEmpty} from 'class-validator';

export class CreateProfileDto{
    @IsNotEmpty()
    id:string;

    @IsNotEmpty()
    sid:string;

    @IsNotEmpty()
    title:string;

    @IsNotEmpty()
    description:string;
}

