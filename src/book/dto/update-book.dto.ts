import { IsOptional, IsString, IsNumber, IsEnum } from 'class-validator';
import { Catagory } from '../schemas/book.schema';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsString()
  readonly author: string;

  @IsOptional()
  @IsNumber()
  readonly price: number;

  @IsOptional()
  @IsEnum(Catagory, { message: 'Please enter valid category.' })
  readonly catagory: Catagory;
}
