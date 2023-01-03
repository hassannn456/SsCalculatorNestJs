import { Body, Controller, Delete, Ip, Post, Req } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
// import RefreshTokenDto from './dto/refresh-token.dto';
import { LoginDto } from './dto/login.dto';

@ApiTags('Login Module')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({summary: 'Login function for access token'})
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
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
    description: 'Logged in!'
  })
  @ApiResponse({
    status: 422,
    description: 'Unauthorized'
  })
  @ApiResponse({
    status: 404,
    description: 'User not found'
  })
  async login(@Req() request, @Ip() ip: string, @Body() body: LoginDto) {
    return this.authService.login(body.email, body.password, {
      ipAddress: ip,
      userAgent: request.headers['user-agent'],
    });
  }

  // @Delete('logout')
  // async logout(@Body() body: RefreshTokenDto) {
  //   return this.authService.logout(body.refreshToken);
  // }
}