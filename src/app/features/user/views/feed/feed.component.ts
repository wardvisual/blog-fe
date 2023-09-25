import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit {
  composerForm: FormGroup;
  fileList: NzUploadFile[] = [];

  ngOnInit(): void {
    this.composerForm = new FormGroup({
      content: new FormControl(''),
      images: new FormControl(''),
    });
  }

  getFormData(event: Event) {
    event.preventDefault();

    console.log(true);
    console.log({ data: this.composerForm.getRawValue() });
    console.log({ fileList: this.fileList });
  }
}
