import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty({ message: '이름은 필수입니다.' })
  @IsString({ message: '이름은 한글자 이상입니다.' })
  name: string;

  @Field()
  @IsNotEmpty({ message: '패스워드는 필수입니다.' })
  @MinLength(6, { message: '패스워드는 6글자 이상입니다.' })
  password: string;

  @Field()
  @IsNotEmpty({ message: '메일은 필수입니다.' })
  @IsEmail({}, { message: '메일이 유효하지 않습니다.' })
  email: string;

  @Field()
  @IsNotEmpty({ message: '전화번호는 필수입니다.' })
  phone_number: number;
}
