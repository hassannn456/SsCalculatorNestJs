import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Staff{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    name: string

    @Column()
    salary: number

    @Column({default: null})
    currency: string

    @Column()
    department: string

    @Column({default: null})
    sub_department: string

    @Column({default: false})
    on_contract: boolean
}