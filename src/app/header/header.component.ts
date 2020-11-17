import {Component} from '@angular/core';
import {CatDataService} from '../services/cat-data.service';

export interface Link {
  title: string;
  link: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  toggle = false;
  count: number = this.catService.catsLength;

  constructor(
    private readonly catService: CatDataService
  ) {
  }

  links: Link[] = [
    {title: 'main', link: '#'},
    {title: 'gallery', link: '#'},
    {title: 'news', link: '#'},
    {title: 'profile', link: '#'},
  ];
}
