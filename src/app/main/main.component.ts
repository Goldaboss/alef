import {Component, EventEmitter, OnInit, Output} from '@angular/core';

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

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Output() outCount: EventEmitter<number> = new EventEmitter<number>();

  catalog: Cat[] = [
    {img: './assets/img/cats/cat-1.png', name: 'Кот полосатый', color: 'Коричневый окрас', age: 2, paws: 4, price: 30000, stoke: true},
    {img: './assets/img/cats/cat-1.png', name: 'Кот полосатый', color: 'Коричневый окрас', age: 2, paws: 4, price: 40000, stoke: true},
    {img: './assets/img/cats/cat-1.png', name: 'Кот полосатый', color: 'Коричневый окрас', age: 2, paws: 4, price: 20000, stoke: true},
    {img: './assets/img/cats/cat-1.png', name: 'Кот полосатый', color: 'Коричневый окрас', age: 2, paws: 4, price: 35000, stoke: true},
    {img: './assets/img/cats/cat-1.png', name: 'Кот полосатый', color: 'Коричневый окрас', age: 2, paws: 4, price: 30000, stoke: true},
    {img: './assets/img/cats/cat-1.png', name: 'Кот полосатый', color: 'Коричневый окрас', age: 2, paws: 4, price: 10000, stoke: true},
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.outCount.emit(this.catalog.length);
  }
}
