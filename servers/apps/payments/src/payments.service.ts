import { Injectable } from '@nestjs/common';
import { CreateChargeInput } from '@app/common';

@Injectable()
export class PaymentsService {
  createChare(createChargeInput: CreateChargeInput) {
    return createChargeInput;
  }
}
