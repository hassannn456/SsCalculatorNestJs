import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import {InjectRepository} from '@nestjs/typeorm'
import { Repository, DeleteResult } from 'typeorm'
import { Staff } from "./staff.entity";

@Injectable()
export class StaffService{
    constructor(@InjectRepository(Staff) private StaffRepository : Repository<Staff>){
    }

    async insertStaff(staff: Staff):Promise<Staff> {
        try{
            return await this.StaffRepository.save(staff);
        } catch(error) {
            throw new HttpException({
                status: 422,
                error: 'Invalid inputs passed, please check your data.',
              }, HttpStatus.UNPROCESSABLE_ENTITY, {
                cause: error
              });
        }
    }

    async getStaff(): Promise<Staff[]>{
        try{
            return await this.StaffRepository.find();
        } catch(error) {
            throw new NotFoundException('Data fetching failed');
        }
    }

    async deleteStaff(recordId: string):Promise<DeleteResult>{
        try{
            const del = await this.StaffRepository.delete(recordId)
            if (del.affected === 0){
                throw new NotFoundException('No user found for provided id');
            } else {
                return del
            }
        } catch(error) {
            throw new NotFoundException('No user found for provided id');
        }
    }

    async statsAll(){
        try{
            const data = await this.StaffRepository.find()
            return finalCalculation(data)
        } catch(error) {
            throw new NotFoundException('Data fetching failed'); 
        }
    }

    async statsContract(){
        try{
            const data = await this.StaffRepository.find()
            const contracted = data.filter(val => val.on_contract === true)
            return finalCalculation(contracted)
        } catch(error) {
            throw new NotFoundException('Data fetching failed'); 
        }
    }


    async statsDepartment(){
        try{
            const data = await this.StaffRepository.find()
            return departmentValues(data, false)
        } catch(error) {
            throw new NotFoundException('Data fetching failed'); 
        }
    }

    async statsSubDepartment(){
        try{
            const data = await this.StaffRepository.find()
            return departmentValues(data, true)
        } catch(error) {
            throw new NotFoundException('Data fetching failed'); 
        }
    }
}

const finalCalculation = (provided) => {
    const check : {min: number, max: number, mean: number} = { min: 0, 
        max: 0, 
        mean: 0}

        provided.forEach(val => {
        check.mean += val.salary
        {check.min ? null : check.min = val.salary}
        {check.max ? null : check.max = val.salary}
        {check.min > val.salary ? check.min = val.salary : null}
        {check.max < val.salary ? check.max = val.salary : null}
    })
    check.mean = Math.trunc(check.mean / provided.length)
    return check
}

const departmentValues = (staff: Staff[], sub: boolean) => {
    if (staff.length){
    let final= {};
    const allDepartments= [...new Set(staff.map(val => val.department))]
        if (allDepartments.length){
            allDepartments.forEach(val => {
            const array = staff.filter(arr => arr.department=== val)
            const answer = finalCalculation(array)
            final[val] = answer
            })
            if (sub) {
                allDepartments.forEach(dep => {
                const array = staff.filter(arr => arr.department=== dep)
                .map(val => val.sub_department)
                array.forEach(val => {
                    const check= staff.filter(arr => arr.sub_department=== val)
                    if (check.length){
                        const answer = finalCalculation(check)
                        final[dep][val] = answer
                    }
                })
                })
            }
            return final;
        } else {
            throw new NotFoundException('No records found')
        }
    } else {
        throw new NotFoundException('No records found')
    }
} 