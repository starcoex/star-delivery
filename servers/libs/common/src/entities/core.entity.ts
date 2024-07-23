import { Field, ObjectType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsDate } from 'class-validator';

@ObjectType()
export class CoreEntity {
  @Field()
  id: number;

  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  created_at: Date;

  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updated_at: Date;
}
