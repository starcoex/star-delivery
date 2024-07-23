import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class ResetPasswordInput {
  @Field()
  @IsNotEmpty({ message: '패스워드는 필수입니다.' })
  @MinLength(6, { message: '패스워드는 6글자 이상입니다.' })
  password: string;

  @Field()
  @IsNotEmpty({ message: '활성화 토근이 필요합니다.' })
  activationToken: string;
}
