import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class RegisterDto {
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
  phone_number: string;
}

@InputType()
export class ActivationDto {
  @Field()
  @IsNotEmpty({ message: '활성화 토근이 필요합니다.' })
  activationToken: string;

  @Field()
  @IsNotEmpty({ message: '활성화 코드가 필요합니다.' })
  activationCode: string;
}

@InputType()
export class LoginDto {
  @Field()
  @IsNotEmpty({ message: '메일은 필수입니다.' })
  @IsEmail({}, { message: '메일이 유효하지 않습니다.' })
  email: string;

  @Field()
  @IsNotEmpty({ message: '패스워드는 필수입니다.' })
  @MinLength(6, { message: '패스워드는 6글자 이상입니다.' })
  password: string;
}

@InputType()
export class ResetPasswordDto {
  @Field()
  @IsNotEmpty({ message: '패스워드는 필수입니다.' })
  @MinLength(6, { message: '패스워드는 6글자 이상입니다.' })
  password: string;

  @Field()
  @IsNotEmpty({ message: '활성화 토근이 필요합니다.' })
  activationToken: string;
}
