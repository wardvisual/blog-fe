import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// import { BlockType } from '@/libs/shared/interfaces';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

interface ComposerForm {
  content: FormControl;
  image: FormControl;
}

enum BlockType {
  text = 'TEXT',
  images = 'IMAGE',
}

@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
})
export class ComposerComponent implements OnInit {
  blockTypes: typeof BlockType = BlockType;
  initBlock = {
    type: BlockType.text,
    content: {
      value: '',
    },
  };

  @Input() composerForm: FormGroup;

  @Output() private readonly createBlog = new EventEmitter();

  blocksFormArray: FormArray = new FormArray([new FormControl(this.initBlock)]);
  ngOnInit(): void {
    this.composerForm = new FormGroup<ComposerForm>({
      content: new FormControl(),
      image: new FormControl(),
    });
  }

  postBlog(event: Event) {
    console.log({ form: this.composerForm.getRawValue() });
    this.createBlog.emit();
  }

  handleFileSelect(event: Event) {
    const files = (event.target as HTMLInputElement).files;

    this.handleFileDrop(files);
  }

  handleFileDrop(fileList: FileList) {
    let files: File[] = [];
    let errorMessage: string;
    const maxFileSize = 2 * 1024 * 1024;
    const acceptedImageFormat = ['image/jpg', 'image/png', 'image/jpeg'];

    if (!fileList.length) {
      console.log('image is empty');
      return;
    }

    for (let i: number = 0; i < fileList.length; i++) {
      const file: File = fileList[i];

      if (!acceptedImageFormat.includes(file.type))
        errorMessage = 'Image format should be in jpg, jpeg, png format';

      if (file.size < maxFileSize) errorMessage = 'Image size is too large.';

      // if (!errorMessage) files = [...files, file];
      files = [...files, file];
    }

    const images = files.map((file: File) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    console.log({ images });

    const imagesControl = this.blocksFormArray.controls.find(
      (control) => control.value.type === this.blockTypes.images
    );

    if (imagesControl) {
      imagesControl.setValue({
        type: this.blockTypes.images,
        content: [...imagesControl.value.content, ...images],
      });
    } else {
      this.blocksFormArray.push(
        new FormControl({
          type: this.blockTypes.images,
          content: images,
        })
      );
    }
  }
}
