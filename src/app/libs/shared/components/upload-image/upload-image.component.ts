import { Component, Input, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { FileHelper } from '@/libs/shared/helpers/file.helper';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
})
export class UploadImageComponent implements OnInit {
  @Input() fileList: NzUploadFile[] = [];
  previewImage: string | undefined = '';
  previewVisible = false;

  ngOnInit(): void {
    console.log({ file: this.fileList });
  }
  handlePreview = async (file: NzUploadFile): Promise<void> => {
    if (!file.url && !file['preview']) {
      file['preview'] = await FileHelper.getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file['preview'];
    this.previewVisible = true;
  };

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };
}
