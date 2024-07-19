import { UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

export const authContext = ({ req }: { req: Request }) => {
  if (req.headers.authorization) {
    // Validate jwt
    return { user: { id: 123 } };
  }
  throw new UnauthorizedException();
};
