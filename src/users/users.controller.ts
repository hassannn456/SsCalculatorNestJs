import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, UseGuards } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

import { User } from './entities/users.entity';
import { UserService } from './users.service';

@ApiTags('Users Module')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({summary: 'Create a new user'})
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        email: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
      }
    }
  })
  @ApiResponse({
    status: 201,
    description: 'User Created'
  })
  @ApiResponse({
    status: 422,
    description: 'Invalid inputs'
  })
  @ApiResponse({
    status: 400,
    description: 'Request failed'
  })
    async createUser(
        @Body() user: User):Promise<User> {
            try{
                return await this.userService.createUser(user)
            }  catch(error) {
                throw new HttpException({
                    status: 422,
                    error: 'Invalid inputs, must not be empty.',
                  }, HttpStatus.UNPROCESSABLE_ENTITY, {
                    cause: error
                  });
            }
    }

    @Delete(':id')
    @ApiOperation({summary: 'Delete a user with id'})
    @ApiResponse({
      status: 201,
      description: 'User deleted'
    })
    @ApiResponse({
      status: 404,
      description: 'User not found'
    })
    async deleteRecord(@Param('id') id: string): Promise<DeleteResult>{
        return await this.userService.deleteUser(id)
    }

    @Get()
    @ApiOperation({summary: 'Get all users with hashed passwords'})
    @ApiResponse({
      status: 201,
      description: 'Users fetched'
    })
    @ApiResponse({
      status: 404,
      description: 'Users not found'
    })
    async getUsers():Promise<User[]>{
        return await this.userService.getUsers()
    }


}