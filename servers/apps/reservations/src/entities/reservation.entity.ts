import { CoreEntity } from '@app/common';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Reservation extends CoreEntity {
  @Field()
  timestamp: Date;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;

  @Field()
  userId: string;

  @Field()
  invoiceId: string;
}
