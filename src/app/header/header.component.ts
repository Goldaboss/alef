import {Component, Input} from '@angular/core';
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
  @Input() count: number;
  constructor() {}

  links: Link[] = [
    {title: 'main', link: '#'},
    {title: 'gallery', link: '#'},
    {title: 'news', link: '#'},
    {title: 'profile', link: '#'},
  ];
}
