import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ProfileStatus } from "./profile.model";



@Entity()
export class Profile extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sid:string;

    @Column()
    title:string;

    @Column()
    description:string;

    @Column()
    status:ProfileStatus;


}