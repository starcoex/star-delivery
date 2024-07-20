import { ObjectType, Field, Directive } from '@nestjs/graphql';
import { CoreEntity } from '../../../../../libs/common/src/dto/core.entity';

@ObjectType()
@Directive('@key(fields:"id")')
export class Avatars {
  @Field()
  id: number;

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
  name: number;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  phone_number: string;

  @Field({ nullable: true })
  avatar?: Avatars | null;

  @Field({ nullable: true })
  kakao_id?: string | null;

  @Field({ nullable: true })
  naver_id?: string | null;

  @Field()
  role: string;
}
