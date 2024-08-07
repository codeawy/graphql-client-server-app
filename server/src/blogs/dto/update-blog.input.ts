import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateBlogInput } from './create-blog.input';

@InputType()
export class UpdateBlogInput extends PartialType(CreateBlogInput) {
  @Field(() => ID)
  id: number;
}
