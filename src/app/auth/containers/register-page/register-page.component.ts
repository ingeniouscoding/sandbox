import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthFormService } from '@sandbox/auth/services/auth-form.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  public fg = this.fb.group({
    username: this.formService.getUsernameControl(),
    password: this.formService.getPasswordControl(),
    passwordConfirm: ['', [
      Validators.required,
    ]],
  });

  constructor(
    private formService: AuthFormService,
    private fb: FormBuilder
  ) { }

  onSubmit() {
    console.log(this.fg.getRawValue());
  }
}
