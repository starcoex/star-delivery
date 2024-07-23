import { Inject, Injectable } from '@nestjs/common';
import { CreateReservationInput } from './dto/create-reservation.input';
import { UpdateReservationInput } from './dto/update-reservation.input';
import { PrismaService } from '../prisma/prisma.service';
import { PAYMENTS_SERVICE } from '@app/common';
import { ClientProxy } from '@nestjs/microservices';
import { User } from '@app/common';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(PAYMENTS_SERVICE) paymentsService: ClientProxy,
  ) {}

  async createReservation(
    createReservationInput: CreateReservationInput,
    user: User,
  ) {
    return this.prisma.reservation.create({
      data: {
        startDate: createReservationInput.startDate,
        endDate: createReservationInput.endDate,
        userId: user.id,
        invoiceId: '12345',
        timestamp: new Date(),
      },
    });
  }

  async findAll() {
    return this.prisma.reservation.findMany({});
  }

  async findOne(id: number) {
    return this.prisma.reservation.findFirstOrThrow({ where: { id } });
  }

  async update(id: number, updateReservationInput: UpdateReservationInput) {
    return this.prisma.reservation.update({
      where: { id },
      data: updateReservationInput,
    });
  }

  async remove(id: number) {
    return this.prisma.reservation.delete({ where: { id } });
  }
}
