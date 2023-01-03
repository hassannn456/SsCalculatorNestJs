import { Module } from "@nestjs/common";
import { StaffController } from "./staff.controller";
import { StaffService } from "./staff.service";
import { Staff } from "./staff.entity";
import {TypeOrmModule } from '@nestjs/typeorm'

@Module({
    imports: [TypeOrmModule.forFeature([Staff])],
    controllers: [StaffController],
    providers: [StaffService]
})
export class StaffModule{}