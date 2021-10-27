import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id?: number;

  @IsNotEmpty()
  @ApiProperty()
  @Column({ length: 500 })
  name: string;

  @Column()
  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @Column()
  @ApiProperty()
  @IsNotEmpty()
  country: string;
}
