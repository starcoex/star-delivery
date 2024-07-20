import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CoreEntity {
  @Field()
  id: number;

  @Field(() => Date)
  created_at: Date;

  @Field(() => Date)
  updated_at: Date;
}
