import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class ForgotPasswordInput {
  @Field()
  @IsNotEmpty({ message: '메일은 필수입니다.' })
  @IsEmail({}, { message: '메일이 유효하지 않습니다.' })
  email: string;
}
