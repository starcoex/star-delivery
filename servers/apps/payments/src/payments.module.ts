import { Module } from '@nestjs/common';
import * as Joi from 'joi';
import { PaymentsService } from './payments.service';
import { PaymentsResolver } from './payments.resolver';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
      }),
    }),
  ],
  providers: [PaymentsResolver, PaymentsService],
})
export class PaymentsModule {}
