import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { UserService } from '../users/users.service';
import { User } from '../users/entities/users.entity';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async login(
    email: string,
    password: string,
    values: { userAgent: string; ipAddress: string },
  ): Promise<{ accessToken: string }> {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      
      throw new NotFoundException(
        "Could not find user, please check your credentials and try again.");
    }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new UnauthorizedException(
        "Could not log you in, please check your credentials and try again.");  
    }

    return this.newAccessToken(user);

  } catch (err) {
      throw new UnauthorizedException(
      "Could not log you in, please check your credentials and try again.");
  }
}

  private async newAccessToken(
    user: User,
  ): Promise<{ accessToken: string }> {

    return {
      accessToken: sign(
        {
          userId: user.id,
        },
        process.env.ACESS_SECRET,
        {
          expiresIn: '1h',
        },
      ),
    };
  }

  // async logout(refreshStr): Promise<void> {
  //   const refreshToken = await this.retrieveRefreshToken(refreshStr);

  //   if (!refreshToken) {
  //     return;
  //   }
  //   // delete refreshtoken from db
  //   this.refreshTokens = this.refreshTokens.filter(
  //     (refreshToken) => refreshToken.id !== refreshToken.id,
  //   );
  // }
}

