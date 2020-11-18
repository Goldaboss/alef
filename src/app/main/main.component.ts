import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Cat, CatDataService} from '../services/cat-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  orderTogglePrice = false;
  orderToggleAge = false;
  catalog: Cat[] = [];
  viewCatalog: Cat[] = [];
  @Output() onScroll: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private readonly catService: CatDataService
  ) {
  }

  ngOnInit(): void {
    this.catalog = this.catService.catsData;
    this.viewCatalog.push(...this.catalog.splice(0, 3));
    // const cut = this.catalog.slice(0, 3);
  }

  sortByPrice(): void {
    if (!this.orderTogglePrice) {
      this.viewCatalog.sort((a, b) => a.price - b.price);
    } else {
      this.viewCatalog.reverse();
    }
    this.orderTogglePrice = !this.orderTogglePrice;
  }

  sortByAge(): void {
    if (!this.orderToggleAge) {
      this.viewCatalog.sort((a, b) => a.age - b.age);
    } else {
      this.viewCatalog.reverse();
    }
    this.orderToggleAge = !this.orderToggleAge;
  }

  addCats(): void {
    this.viewCatalog.push(...this.catalog.splice(0, 3));
  }

  scrollUp(): void {
    this.onScroll.emit();
  }
}
