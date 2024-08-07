import { InputType, Field, ID } from '@nestjs/graphql';
import { IsNotEmpty, Length } from 'class-validator';

@InputType()
export class CreateBlogInput {
  @Field()
  @IsNotEmpty()
  @Length(5, 100)
  title: string;

  @Field()
  @IsNotEmpty()
  @Length(10, 5000)
  content: string;

  @Field(() => ID)
  @IsNotEmpty()
  authorId: number;
}
