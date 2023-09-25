import { Component, Input } from '@angular/core';

import { BlockType } from '@/libs/shared/interfaces';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
})
export class ComposerComponent {
  @Input() composerForm: FormGroup;
  blockTypes = BlockType;
  initBlock = {
    type: BlockType.text,
    content: {
      value: '',
    },
  };

  blocksFormArray: FormArray = new FormArray([new FormControl(this.initBlock)]);

  addBlock(block: BlockType) {
    this.blocksFormArray.push(
      new FormControl({
        type: block,
        content: {
          value: '',
        },
      })
    );
  }

  handleFileSelect(event: Event) {
    const fileList = (event.target as HTMLInputElement).files;
  }
}
