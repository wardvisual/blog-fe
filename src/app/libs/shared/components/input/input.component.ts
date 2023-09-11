import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() type: string;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() value: string;
  @Input() required: boolean;
  @Output() validationStatusChange = new EventEmitter<boolean>();

  @Input() formControlName: string;
  @Input() formGroup: FormGroup;

  ngOnInit() {
    this.formGroup.get(this.formControlName).valueChanges.subscribe(() => {
      this.validationStatusChange.emit(this.formGroup.valid);
    });
  }

  displayErrors(): string | null {
    const control: any = this.formGroup.get(this.formControlName);

    if (control && control.invalid && (control.dirty || control.touched)) {
      if (control.errors.required) {
        return 'This field is required';
      }

      if (control.errors.minlength) {
        return `This value has ${control.errors.minlength.actualLength} but must be at least ${control.errors['minlength'].requiredLength}`;
      }
    }

    return null;
  }
}
