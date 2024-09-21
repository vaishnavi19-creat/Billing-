import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 15, unique: true })
    mobileNo: string;

    @Column({ type: 'varchar', length: 100, unique: true })
    email: string;


    @Column({ type: 'text' })
    address: string;
    
    @Column({ type: 'varchar', length: 15, unique: true })
    gstNo: string;
    
    @Column({ type: 'varchar', length: 255, nullable: true })
    logo: string; 
   
}