import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { AuthFormService } from '@sandbox/auth/services/auth-form.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  public fg = this.fb.group({
    username: this.formService.getUsernameControl(),
    password: this.formService.getPasswordControl(),
  });

  constructor(
    private formService: AuthFormService,
    private fb: FormBuilder
  ) { }

  onSubmit() {
    console.log(this.fg.getRawValue());
  }
}
