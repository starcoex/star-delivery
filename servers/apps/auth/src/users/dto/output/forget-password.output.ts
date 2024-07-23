import { ErrorType } from '@app/common';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ForgotPasswordOutput {
  @Field()
  message: string;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}
