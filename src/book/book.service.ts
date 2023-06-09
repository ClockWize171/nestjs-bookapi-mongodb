import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import { Query } from 'express-serve-static-core';
import * as mongoose from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name)
    private bookModel: mongoose.Model<Book>,
  ) {}

  async findAll(query: Query): Promise<Book[]> {
    const resultPerPage = 3;
    const currentPage = Number(query.page) || 1;
    const skip = resultPerPage * (currentPage - 1);
    const keyword = query.keyword
      ? {
          title: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};
    const res = await this.bookModel
      .find({ ...keyword })
      .limit(resultPerPage)
      .skip(skip);
    return res;
  }

  async create(book: Book, user: User): Promise<Book> {
    const data = Object.assign(book, { user: user._id });
    const res = await this.bookModel.create(data);
    return res;
  }

  async findById(id: string): Promise<Book> {
    const isValid = mongoose.isValidObjectId(id);
    if (!isValid) {
      throw new BadRequestException('Please enter valid ID.');
    }

    const res = await this.bookModel.findById(id);
    if (!res) {
      throw new NotFoundException('Book not found!');
    }
    return res;
  }

  async updateById(id: string, book: Book): Promise<Book> {
    return await this.bookModel.findByIdAndUpdate(id, book, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Book> {
    return await this.bookModel.findByIdAndDelete(id);
  }
}
