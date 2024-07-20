import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async register(@Body() registerDto: RegisterDto) {
    return this.usersService.register(registerDto);
  }
}
