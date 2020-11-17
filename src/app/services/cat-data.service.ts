import {Injectable} from '@angular/core';

export interface Cat {
  img: string;
  discount?: number;
  name?: string;
  color?: string;
  age?: number;
  paws?: number;
  price?: number;
  stoke?: boolean;
}

@Injectable({providedIn: 'root'})
export class CatDataService {
  private data: Cat[] = [
    {img: './assets/img/cats/cat-1.png', name: 'Кот полосатый', color: 'Коричневый окрас', age: 2, paws: 4, price: 30000, stoke: true},
    {img: './assets/img/cats/cat-1.png', name: 'Кот полосатый', color: 'Коричневый окрас', age: 2, paws: 4, price: 40000, stoke: true},
    {img: './assets/img/cats/cat-1.png', name: 'Кот полосатый', color: 'Коричневый окрас', age: 2, paws: 4, price: 20000, stoke: true},
    {img: './assets/img/cats/cat-1.png', name: 'Кот полосатый', color: 'Коричневый окрас', age: 2, paws: 4, price: 35000, stoke: true},
    {img: './assets/img/cats/cat-1.png', name: 'Кот полосатый', color: 'Коричневый окрас', age: 2, paws: 4, price: 30000, stoke: true},
    {img: './assets/img/cats/cat-1.png', name: 'Кот полосатый', color: 'Коричневый окрас', age: 2, paws: 4, price: 10000, stoke: true},
  ];

  public get catsData(): Cat[] {
    return this.data;
  }

  public get catsLength(): number {
    return this.data.length;
  }
}

