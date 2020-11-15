import { Component, OnInit } from '@angular/core';
export interface Link {
  title: string;
  link: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggle = false;

  constructor() { }

  links: Link[] = [
    {title: 'main', link: '#'},
    {title: 'gallery', link: '#'},
    {title: 'news', link: '#'},
    {title: 'profile', link: '#'},
  ];

  ngOnInit(): void {
  }

}
