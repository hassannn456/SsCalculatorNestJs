import { Injectable } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

@Injectable()
export class AppService {

  @ApiOperation({summary: 'Just the home page'})
  getApis(): string {
    const apis = "Welcome! Use /apis to access swagger"
    return apis;
  }
}
