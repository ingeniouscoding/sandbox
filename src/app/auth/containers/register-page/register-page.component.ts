import { Component } from '@angular/core';

import { UserFormService } from '@sandbox/auth/services/user-form.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  public fg = this.formService.getLoginForm();

  constructor(private formService: UserFormService) { }

  onSubmit() {
    console.log(this.fg.getRawValue());
  }
}
