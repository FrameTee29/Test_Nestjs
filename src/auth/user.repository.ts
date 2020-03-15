import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";

@EntityRepository(User)
export  class UserRepository extends Repository<User>{
    async signUp(authCredentialsDto:AuthCredentialsDto){
        const {username , password} = authCredentialsDto;

        const exists =this.findOne({username})

        if(exists){
            
        }

        const user =new User();
        user.username = username;
        user.password = password;

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

}