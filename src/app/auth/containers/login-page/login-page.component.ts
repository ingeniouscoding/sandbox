import { Component } from '@angular/core';

import { UserFormService } from '@sandbox/auth/services/user-form.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  public fg = this.formService.getRegisterForm();

  constructor(private formService: UserFormService) { }

  onSubmit() {
    console.log(this.fg.getRawValue());
  }
}
