import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './containers/login-page/login-page.component';
import { RegisterPageComponent } from './containers/register-page/register-page.component';
import { BaseFormComponent } from './components/base-form/base-form.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    BaseFormComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class AuthModule { }
