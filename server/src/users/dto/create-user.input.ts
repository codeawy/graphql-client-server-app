import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  @Length(3, 50)
  username: string;

  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
