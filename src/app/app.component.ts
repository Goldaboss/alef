import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('header', {static: false, read: ElementRef}) header: ElementRef;

  scrollUp(): void {
    this.header.nativeElement.scrollIntoView({behavior: 'smooth'});
  }
}
