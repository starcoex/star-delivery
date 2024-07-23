import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserInput } from './dto/input/create-user.input';
// import { UpdateUserInput } from './dto/input/update-user.input';
import { PrismaService } from 'apps/auth/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { GetUserInput } from './dto/input/get-user-input';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(createUserInput: CreateUserInput) {
    const { name, email, password, phone_number } = createUserInput;
    return this.prisma.user.create({
      data: {
        name,
        email,
        password: await bcrypt.hash(password, 10),
        phone_number,
      },
    });
  }

  async verifyUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      throw new UnauthorizedException('자격증명이 유효하지 않습니다.');
    }
    return user;
  }

  async getUser(getUserInput: GetUserInput) {
    const { id } = getUserInput;
    return this.prisma.user.findUnique({ where: { id } });
  }

  // async createUser(createUserInput: CreateUserInput) {
  //   const { name, email, password, phone_number } = createUserInput;

  //   const isEmailExist = await this.prisma.user.findUnique({
  //     where: { email },
  //   });
  //   if (isEmailExist) {
  //     throw new BadRequestException('메일이 이미 존재합니다.');
  //   }
  //   const phoneNumbersToCheck = [phone_number];
  //   const phoneWithPhoneNumber = await this.prisma.user.findMany({
  //     where: {
  //       phone_number: {
  //         not: null,
  //         in: phoneNumbersToCheck as any,
  //       },
  //     },
  //   });
  //   if (phoneWithPhoneNumber.length > 0) {
  //     throw new BadRequestException('이미 번호가 존재합니다.');
  //   }
  //   const hashedPassword = await bcrypt.hash(password, 10);
  //   const user = {
  //     name,
  //     email,
  //     password: hashedPassword,
  //     phone_number,
  //   };
  // }
}
