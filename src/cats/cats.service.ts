import { Injectable } from '@nestjs/common';

export type Cat = {
  id: number;
  name: string;
};

let cats = [
  { id: 0, name: '집돌이' },
  { id: 1, name: '집순이' },
];
@Injectable()
export class CatsService {
  getCats(): Cat[] {
    return cats;
  }

  getCatById(id: number): Cat | undefined {
    return cats.find((cat: Cat) => cat.id === id);
  }

  createCatById(body: { name: string }) {
    const newId = cats[cats.length - 1].id + 1;
    cats.push({
      id: newId,
      name: body.name,
    });
  }

  updateCatById(id: number, body: { name: string }) {
    let oldCat = cats.find((cat: Cat) => cat.id === id);
    console.log('📢[cats.service.ts:32]: oldCat: ', cats);
    if (oldCat) {
      oldCat.name = body.name;
    }
  }

  deleteCatById(id: number) {
    cats = cats.filter((cat) => cat.id !== id);
  }
}
