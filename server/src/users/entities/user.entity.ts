import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Blog } from 'src/blogs/entities/blog.entity';

@Entity({ name: 'users' })
@ObjectType()
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @OneToMany(() => Blog, (blog) => blog.author)
  @Field(() => [Blog], { nullable: true })
  blogs: Blog[];
}
