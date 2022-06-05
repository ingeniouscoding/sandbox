import { Component, OnInit } from '@angular/core';
import { AuthService } from '@sandbox/auth/services/auth.service';

import { UserFormService } from '@sandbox/auth/services/user-form.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public fg = this.formService.getLoginForm();

  constructor(
    private formService: UserFormService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.getToken();
  }

  onSubmit() {
    this.auth.login();
  }
}
