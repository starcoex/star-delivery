import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LogoOutOutput {
  @Field()
  message?: string;
}
