import {Injectable} from '@angular/core';

export interface Cat {
  img: string;
  discount?: number;
  name: string;
  color: string;
  age: number;
  paws: number;
  price: number;
  stoke: boolean;
}

@Injectable({providedIn: 'root'})
export class CatDataService {
  private data: Cat[] = [
    {img: './assets/img/cats/cat-00.jpg', name: 'Кот полосатый', color: 'Коричневый окрас', age: 2, paws: 4, price: 1000000, stoke: true},
    {img: './assets/img/cats/cat-2.png', discount: 40, name: 'Кот полосатый', color: 'Коричневый окрас', age: 7, paws: 4, price: 40000, stoke: false},
    {img: './assets/img/cats/cat-3.png', name: 'Кот полосатый', color: 'Коричневый окрас', age: 4, paws: 4, price: 20000, stoke: true},
    {img: './assets/img/cats/cat-3.png', name: 'Кот полосатый', color: 'Коричневый окрас', age: 8, paws: 4, price: 35000, stoke: true},
    {img: './assets/img/cats/cat-1.png', discount: 20, name: 'Кот полосатый', color: 'Коричневый окрас', age: 3, paws: 4, price: 25000, stoke: false},
    {img: './assets/img/cats/cat-2.png', name: 'Кот полосатый', color: 'Коричневый окрас', age: 12, paws: 4, price: 12000, stoke: true},
    {img: './assets/img/cats/cat-3.png', name: 'Кот полосатый', color: 'Коричневый окрас', age: 11, paws: 4, price: 34000, stoke: true},
    {img: './assets/img/cats/cat-1.png', name: 'Кот полосатый', color: 'Коричневый окрас', age: 6, paws: 4, price: 27000, stoke: true},
    {img: './assets/img/cats/cat-2.png', discount: 30, name: 'Кот полосатый', color: 'Коричневый окрас', age: 17, paws: 4, price: 11000, stoke: false},
    {img: './assets/img/cats/cat-3.png', name: 'Кот полосатый', color: 'Коричневый окрас', age: 20, paws: 4, price: 31000, stoke: true},
    {img: './assets/img/cats/cat-1.png', name: 'Кот полосатый', color: 'Коричневый окрас', age: 23, paws: 4, price: 26000, stoke: true},
    {img: './assets/img/cats/cat-2.png', name: 'Кот полосатый', color: 'Коричневый окрас', age: 13, paws: 4, price: 13000, stoke: true},
    {img: './assets/img/cats/cat-3.png', discount: 10, name: 'Кот полосатый', color: 'Коричневый окрас', age: 21, paws: 4, price: 37000, stoke: false},
    {img: './assets/img/cats/cat-1.png', name: 'Кот полосатый', color: 'Коричневый окрас', age: 24, paws: 4, price: 22000, stoke: true},
    {img: './assets/img/cats/cat-2.png', name: 'Кот полосатый', color: 'Коричневый окрас', age: 25, paws: 4, price: 16000, stoke: true},
  ];

  public get catsData(): Cat[] {
    return this.data;
  }

  public get catsLength(): number {
    return this.data.length;
  }
}

