import { CreateReservationInput } from './create-reservation.input';
import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReservationInput extends PartialType(
  CreateReservationInput,
) {
  @Field()
  id: number;
}
