import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ProfileStatus } from "./profile.model";



@Entity()
export class Profile extends BaseEntity {

    @PrimaryGeneratedColumn()
    sid: number;

    @Column()
    title:string;

    @Column()
    description:string;



}