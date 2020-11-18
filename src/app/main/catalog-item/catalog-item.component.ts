import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cat} from '../../services/cat-data.service';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent implements OnInit {
  @Input() item: Cat;
  likeToggle = false;
  @Output() like: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  likeCat(): void {
    this.likeToggle = !this.likeToggle;
    if (this.likeToggle) {
      console.log('Show me POP-UP');
      this.like.emit();
    }
  }
}
