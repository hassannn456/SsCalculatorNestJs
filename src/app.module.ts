import { Module } from '@nestjs/common';
import {TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaffModule } from './Staff/staff.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [StaffModule, 
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'staffDB',
    entities: [__dirname + '/**/*.entity.{js,ts}'],
    synchronize: true
  }), UsersModule, AuthModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
