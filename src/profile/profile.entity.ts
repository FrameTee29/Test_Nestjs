import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";
import { ProfileStatus } from "./profile.model";



@Entity()
export class Profile extends BaseEntity {


    @PrimaryColumn()
    sid:string;

    @Column()
    title:string;

    @Column()
    description:string;

    @Column()
    status:ProfileStatus;


}