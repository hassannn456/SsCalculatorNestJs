import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entities/users.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private UserRepository : Repository<User>){}

    async createUser(user: User):Promise<User> {
      const users = await this.UserRepository.find();
      const check = users.filter(already => user.email !== already.email)

      if (check.length){
        throw new UnauthorizedException(
          "User exists already, please login instead.");
      }

      let hashedPassword;
      try {
      hashedPassword = await bcrypt.hash(user.password, 12);
      } catch (err) {
        throw new BadRequestException(
            "Could not create user, please try again.")
      }
      user["password"]= hashedPassword
      
      try{
          return await this.UserRepository.save(user);
      } catch(error) {
        throw new NotFoundException('User creation failed.')  
      }
  }

  async getUsers(): Promise<User[]>{
    try{
        return await this.UserRepository.find();
    } catch(error) {
      throw new NotFoundException('Could not fetch data.')  
    }
}

async deleteUser(recordId: string):Promise<DeleteResult>{
  try{
      const del = await this.UserRepository.delete(recordId)
      if (del.affected === 0){
          throw new NotFoundException('No user found for provided id');
      } else {
          return del
      }
  } catch(error) {
      throw new NotFoundException('No user found for provided id');
  } 
}

    async findByEmail(email: string): Promise<User | undefined> {
        const users = await this.UserRepository.find()
        const user = users.find((user) => user.email === email);
        if (user) {
          return Promise.resolve(user);
        }
        return undefined;
      }

    async findOne(id: number): Promise<User | undefined> {
      const users = await this.UserRepository.find()
      const user = users.find((user) => user.id === id);
      if (user) {
        return Promise.resolve(user);
      }
        return undefined;
      }
}
