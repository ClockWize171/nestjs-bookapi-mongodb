import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export enum Catagory {
  ADVENTURE = 'Adventure',
  CLASSIC = 'Classic',
  CRIME = 'Crime',
  FANTASY = 'Fantasy',
}

@Schema({
  timestamps: true,
})
export class Book {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  author: string;

  @Prop()
  price: number;

  @Prop()
  catagory: Catagory;
}

export const BookSchema = SchemaFactory.createForClass(Book);
