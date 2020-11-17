import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  count: number;

  onCountChange(event: number): void {
    this.count = event;
  }

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.count);
  }
}
