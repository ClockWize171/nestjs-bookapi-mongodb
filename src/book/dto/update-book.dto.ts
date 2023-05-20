import {
  IsOptional,
  IsString,
  IsNumber,
  IsEnum,
  IsEmpty,
} from 'class-validator';
import { Catagory } from '../schemas/book.schema';
import { User } from 'src/auth/schemas/user.schema';

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

  @IsEmpty({ message: 'You cannot pass user ID' })
  readonly user: User;
}
