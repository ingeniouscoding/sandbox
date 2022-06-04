import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserFormService {
  getBaseForm(): FormGroup {
    const fg = new FormGroup({
      username: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
    });
    return fg;
  }

  getUsernameControl() {
    return new FormControl('', [
      Validators.required,
    ]);
  }

  getPasswordControl() {
    return new FormControl('', [
      Validators.required,
    ]);
  }
}
