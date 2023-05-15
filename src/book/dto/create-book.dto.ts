import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Catagory } from '../schemas/book.schema';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly author: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsEnum(Catagory, { message: 'Please enter valid category.' })
  readonly catagory: Catagory;
}
