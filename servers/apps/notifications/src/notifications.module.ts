import { Module } from '@nestjs/common';
import * as Joi from 'joi';
import { NotificationsService } from './notifications.service';
import { NotificationsResolver } from './notifications.resolver';
import { LoggerModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.string().required(),
      }),
    }),
  ],
  providers: [NotificationsResolver, NotificationsService],
})
export class NotificationsModule {}
