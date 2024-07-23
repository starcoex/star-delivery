import { IsNotEmpty } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ActivationInput {
  @Field()
  @IsNotEmpty({ message: '활성화 토근이 필요합니다.' })
  activationToken: string;

  @Field()
  @IsNotEmpty({ message: '활성화 코드가 필요합니다.' })
  activationCode: string;
}
