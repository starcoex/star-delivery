import { ObjectType, Field, Directive } from '@nestjs/graphql';
import { CoreEntity } from '../../../../../libs/common/src/entities/core.entity';
import { IsEmail } from 'class-validator';

@ObjectType()
@Directive('@key(fields:"id")')
export class Avatars extends CoreEntity {
  @Field()
  public_id: string;

  @Field()
  url: string;

  @Field()
  userId: string;
}

@ObjectType()
@Directive('@key(fields:"id")')
export class User extends CoreEntity {
  @Field()
  name: string;

  @IsEmail()
  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => Avatars, { nullable: true })
  avatar?: Avatars | null;

  @Field()
  role: string;

  @Field({ nullable: true })
  address: string;

  @Field({ nullable: true })
  phone_number: number;
}
