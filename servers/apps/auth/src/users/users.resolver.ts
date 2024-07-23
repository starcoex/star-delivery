import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CreateUserInput } from './dto/input/create-user.input';
// import { UpdateUserInput } from './dto/input/update-user.input';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { CreateUserOutput } from './dto/output/create-user.output';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => CreateUserOutput)
  // createUser(
  //   @Args('createUserInput') createUserInput: CreateUserInput,
  // ): Promise<CreateUserOutput> {
  //   return this.usersService.createUser(createUserInput);
  // }
  createUser(
    @Args('createUserInput')
    createUserInput: CreateUserInput,
  ) {
    return this.usersService.createUser(createUserInput);
  }
}
