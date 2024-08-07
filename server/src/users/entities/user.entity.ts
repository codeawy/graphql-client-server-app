import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
@Entity({
  name: 'users',
})
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({
    nullable: false,
  })
  @Column()
  name: string;

  @Field()
  @Column({ unique: true })
  email: string;
}
