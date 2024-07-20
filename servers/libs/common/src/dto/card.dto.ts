import { InputType } from '@nestjs/graphql';
import { IsCreditCard, IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CardDto {
  @IsString()
  @IsNotEmpty()
  cvc: string;

  @IsNumber()
  exp_month: number;

  @IsNumber()
  exp_year: number;

  @IsCreditCard()
  number: string;
}