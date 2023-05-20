import {
  IsEmpty,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Catagory } from '../schemas/book.schema';
import { User } from 'src/auth/schemas/user.schema';

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

  @IsEmpty({ message: 'You cannot pass user ID' })
  readonly user: User;
}
