import { InputType, Field, ID } from '@nestjs/graphql';
import { IsOptional, Length, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateBlogInput {
  @Field(() => ID)
  @IsNotEmpty()
  id: number;

  @Field({ nullable: true })
  @IsOptional()
  @Length(5, 100)
  title?: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(10, 5000)
  content?: string;

  @Field(() => ID, { nullable: true })
  @IsOptional()
  authorId?: number;
}
