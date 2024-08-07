import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Blog {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  content: string;
}
