import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup( {
      email: new FormControl('', [Validators.email, Validators.required])
    });
  }
  submit(): void {
  }
}
