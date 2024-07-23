import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class LoginInput {
  @Field()
  @IsNotEmpty({ message: '메일은 필수입니다.' })
  @IsEmail({}, { message: '메일이 유효하지 않습니다.' })
  email: string;

  @Field()
  @IsNotEmpty({ message: '패스워드는 필수입니다.' })
  @MinLength(6, { message: '패스워드는 6글자 이상입니다.' })
  password: string;
}
