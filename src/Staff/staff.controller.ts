import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { DeleteResult } from 'typeorm';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Staff } from './staff.entity';
import { StaffService } from './staff.service';

@UseGuards(JwtAuthGuard)
@ApiTags('Test Requirement Module: authorization required')
@Controller('staff')
export class StaffController {
  constructor(private StaffService: StaffService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new memeber}' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        salary: {
          type: 'number',
        },
        currency: {
          type: 'string',
        },
        department: {
          type: 'string',
        },
        sub_department: {
          type: 'string',
        },
        on_contract: {
          type: 'boolean',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'User Created',
  })
  @ApiResponse({
    status: 422,
    description: 'Invalid inputs',
  })
  async insertStaff(@Body() staff: Staff): Promise<Staff> {
    try {
      return await this.StaffService.insertStaff(staff);
    } catch (error) {
      throw new HttpException(
        {
          status: 422,
          error:
            'Invalid inputs, name, salary and department must not be empty.',
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
        {
          cause: error,
        },
      );
    }
  }

  @Get()
  @ApiOperation({ summary: 'To get all staff members' })
  @ApiResponse({
    status: 201,
    description: 'Users Fetched',
  })
  @ApiResponse({
    status: 404,
    description: 'Users not found',
  })
  async getStaff(): Promise<Staff[]> {
    return await this.StaffService.getStaff();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a staff member by providing the id' })
  @ApiResponse({
    status: 201,
    description: 'User deleted',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  async deleteRecord(@Param('id') id: string): Promise<DeleteResult> {
    return await this.StaffService.deleteStaff(id);
  }

  @Get('stats')
  @ApiOperation({ summary: 'Get SS of all staff members' })
  @ApiResponse({
    status: 201,
    description: 'Data fetched',
  })
  @ApiResponse({
    status: 404,
    description: 'Could not fetch users',
  })
  async staticsFetch() {
    return await this.StaffService.statsAll();
  }

  @Get('contractedStats')
  @ApiOperation({ summary: 'Get SS of all contracted staff members' })
  @ApiResponse({
    status: 201,
    description: 'Data fetched',
  })
  @ApiResponse({
    status: 404,
    description: 'Could not fetch users',
  })
  async contStatsFetch() {
    return await this.StaffService.statsContract();
  }

  @Get('departmentStats')
  @ApiOperation({ summary: 'Get SS of each department' })
  @ApiResponse({
    status: 201,
    description: 'Data fetched',
  })
  @ApiResponse({
    status: 404,
    description: 'Could not fetch users',
  })
  async depStaticsFetch() {
    return await this.StaffService.statsDepartment();
  }

  @Get('subDepartmentStats')
  @ApiOperation({
    summary:
      'Get SS of each department with nested objects of SS of each sub_department',
  })
  @ApiResponse({
    status: 201,
    description: 'Data fetched',
  })
  @ApiResponse({
    status: 404,
    description: 'Could not fetch users',
  })
  async subDepStatsFetch() {
    return await this.StaffService.statsSubDepartment();
  }
}
