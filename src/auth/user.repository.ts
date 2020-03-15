import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export  class UserRepository extends Repository<User>{
    async signUp(authCredentialsDto:AuthCredentialsDto){
        const {username , password} = authCredentialsDto;





        const user =new User();
        user.username = username;
        user.salt=await bcrypt.genSalt()
        user.password = await this.hashPassword(password,user.salt);

        try{
            await user.save();
        }
        catch(error){
            if(error.code === "ER_DUP_ENTRY"){
                throw new ConflictException('Username already existis');
            }
            else{
                throw new InternalServerErrorException();
            }
        }
    }

    private async hashPassword(password:string,salt:string){
        return bcrypt.hash(password,salt);
    }

}