import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  composerForm: FormGroup

  ngOnInit(): void {
    this.composerForm = new FormGroup({
      content: new FormControl(''),
      images: new FormControl(''),
    });
  }
}
