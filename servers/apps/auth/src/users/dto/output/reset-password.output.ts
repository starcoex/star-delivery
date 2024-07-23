import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../entities/user.entity';
import { ErrorType } from '@app/common';

@ObjectType()
export class ResetPasswordOutput {
  @Field(() => User)
  user: User | unknown;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}
