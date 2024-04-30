import { Injectable } from '@nestjs/common';
import { CatRequestDto } from './dto/cats.request.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './cats.schema';
@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}
  async signUp(body: CatRequestDto) {
    const createdCat = new this.catModel(body);
    console.log('📢[cats.service.ts:11]: createdCat: ', createdCat);
    return createdCat.save();
  }
}
