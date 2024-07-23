import { UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { app } from './app';
import { ClientProxy } from '@nestjs/microservices';
import { AUTH_SERVICE } from '@app/common';

export const authContext = async ({ req }: { req: Request }) => {
  try {
    const authClient = app.get<ClientProxy>(AUTH_SERVICE);
  } catch (error) {
    throw new UnauthorizedException(error);
  }
};
