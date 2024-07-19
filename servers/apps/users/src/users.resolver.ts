import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { RegisterResponse } from './types/user.types';
import { RegisterDto } from './dto/user.dto';
import { Response } from 'express';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => RegisterResponse)
  register(
    @Args('registerInput') registerDto: RegisterDto,
    @Context() context: { res: Response },
  ): Promise<RegisterDto> {
    return this.usersService.register(registerDto, context.res);
  }

  @Query(() => [User])
  getUsers() {
    return this.usersService.getUsers();
  }
}
