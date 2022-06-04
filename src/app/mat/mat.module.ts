import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { MatRoutingModule } from './mat-routing.module';
import { MatPageComponent } from './containers/mat-page/mat-page.component';


@NgModule({
  declarations: [
    MatPageComponent,
  ],
  imports: [
    CommonModule,
    MatRoutingModule,
    MatCardModule,
  ],
})
export class MatModule { }
