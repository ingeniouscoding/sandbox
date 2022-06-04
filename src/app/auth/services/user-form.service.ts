import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserFormService {
  getLoginForm(): FormGroup {
    const fg = new FormGroup({
      username: this.getUsernameControl(),
      password: this.getPasswordControl(),
    });
    return fg;
  }

  getRegisterForm() {
    const fg = new FormGroup({
      username: this.getUsernameControl(),
      password: this.getPasswordControl(),
      passwordConfirm: this.getPasswordConfirmControl(),
    });
    return fg;
  }

  private getUsernameControl() {
    return new FormControl('', [
      Validators.required,
    ]);
  }

  private getPasswordControl() {
    return new FormControl('', [
      Validators.required,
    ]);
  }

  private getPasswordConfirmControl() {
    return new FormControl('', [
      Validators.required,
    ]);
  }
}
