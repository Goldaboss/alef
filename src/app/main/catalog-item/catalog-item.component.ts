import {Component, Input, OnInit} from '@angular/core';
import {Cat} from '../../services/cat-data.service';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent implements OnInit {
  @Input() item: Cat;
  likeToggle = false;
  constructor() { }

  ngOnInit(): void {
  }

  likeCat(): void {
    this.likeToggle = !this.likeToggle;
  }
}
