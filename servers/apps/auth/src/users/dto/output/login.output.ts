import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../entities/user.entity';
import { ErrorType } from '@app/common';

@ObjectType()
export class LoginOutput {
  @Field(() => User, { nullable: true })
  user?: User | unknown;

  @Field({ nullable: true })
  accessToken?: string;

  @Field({ nullable: true })
  refreshToken?: string;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}
