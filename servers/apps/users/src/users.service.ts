import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto/user.dto';
import { Response } from 'express';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  //사용자 서비스 등록
  async register(registerDto: RegisterDto, res: Response) {
    const { name, email, password, phone_number } = registerDto;
    if (!name || !email || !password) {
      throw new BadRequestException('모든 내용을 채워주세요 ');
    }
    const user = {
      name,
      email,
      password,
      phone_number,
    };
    return user;
  }

  //로그인 서비스
  async Login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = { email, password };
    return user;
  }

  //모든 사용자 조회 서비스
  async getUsers() {
    return this.prisma.user.findMany();
  }
}
