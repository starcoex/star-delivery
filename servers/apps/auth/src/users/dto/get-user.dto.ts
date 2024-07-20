import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetUserDto {
  @Field()
  id: number;
}
