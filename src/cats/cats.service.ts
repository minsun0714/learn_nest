import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CatRequestDto } from './dto/cats.request.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './cats.schema';
import * as bcrypt from 'bcrypt';
@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}
  async signUp(body: CatRequestDto) {
    const { name, email, password } = body;
    const catAlreadyExists = await this.catModel.exists({ email });

    if (catAlreadyExists) {
      throw new HttpException(
        '이미 존재하는 고양이입니다.',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);

    const cat = await this.catModel.create({
      name,
      email,
      password: hashedPassword,
    });
    return cat.readOnlyData;
  }
}
