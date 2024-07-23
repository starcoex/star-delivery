import { Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional } from 'class-validator';

@ObjectType()
export class CoreOutput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  error?: string;

  @Field(() => Boolean)
  @IsBoolean()
  ok: boolean;
}

@ObjectType()
export class ErrorType {
  @Field()
  message: string;

  @Field({ nullable: true })
  code?: string;
}
