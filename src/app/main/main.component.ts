import {Component, OnInit} from '@angular/core';
import {Cat, CatDataService} from '../services/cat-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  orderTogglePrice = false;

  catalog: Cat[] = [];
  viewCatalog: Cat[] = [];

  constructor(
    private readonly catService: CatDataService
  ) {
  }

  ngOnInit(): void {
    this.catalog = this.catService.catsData;
    this.viewCatalog.push(...this.catalog.splice(0, 3));
  }

  sortByPrice(): void {
    if (!this.orderTogglePrice) {
      this.catalog.sort((a, b) => a.price - b.price);
    } else {
      this.catalog.reverse();
    }
    this.orderTogglePrice = !this.orderTogglePrice;
  }
}
