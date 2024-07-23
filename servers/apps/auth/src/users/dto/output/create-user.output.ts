import { ErrorType } from '@app/common';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateUserOutput {
  @Field()
  activation_token: string;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}
