import { Table, Column, Model } from 'sequelize-typescript';


@Table
export class Profile extends Model<Profile> {
    @Column
    sid: number;

    @Column
    title:string;

    @Column
    description:string;

}