import { Module } from '@nestjs/common';
import * as Joi from 'joi';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { LoggerModule } from '@app/common/logger';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        // AUTH_HOST: Joi.string().required(),
        // PAYMENTS_HOST: Joi.string().required(),
        // AUTH_PORT: Joi.number().required(),
        // PAYMENTS_PORT: Joi.number().required(),
      }),
    }),
    LoggerModule,
  ],
  providers: [
    UsersResolver,
    UsersService,
    JwtService,
    ConfigService,
    PrismaService,
  ],
})
export class UsersModule {}
