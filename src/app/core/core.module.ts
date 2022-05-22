import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './containers/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AppComponent,
  ],
})
export class CoreModule { }
