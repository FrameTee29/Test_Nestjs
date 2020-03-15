import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ProfileStatus } from './profile.model';

@Entity()
export class Profile extends BaseEntity {
    @PrimaryGeneratedColumn()
    Sid: number;

    @Column()
    title:string;

    @Column()
    description:string;

    @Column()
    status: ProfileStatus;
}