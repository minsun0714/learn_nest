import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export type CatDocument = HydratedDocument<Cat>;

const option: SchemaOptions = {
  timestamps: true,
};
@Schema(option)
export class Cat {
  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  name: string;

  @Prop({ required: true, unique: true })
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  password: string;

  @Prop()
  @IsString()
  imgUrl: string;

  readonly readOnlyData: { id: string; email: string; name: string };
}

export const CatSchema = SchemaFactory.createForClass(Cat);

CatSchema.virtual('readOnlyData').get(function () {
  return {
    id: this.id,
    email: this.email,
    name: this.name,
  };
});
