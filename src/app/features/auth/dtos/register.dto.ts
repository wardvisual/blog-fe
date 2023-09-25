import { FormControl } from '@angular/forms';

export interface RegisterDto {
  firstName: FormControl;
  lastName: FormControl;
  username: FormControl;
  password: FormControl;
}
