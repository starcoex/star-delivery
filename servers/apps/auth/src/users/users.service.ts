import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  async register(registerDto: RegisterDto) {
    return;
  }
}
