import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatPageComponent } from './containers/mat-page/mat-page.component';

const routes: Routes = [
  {
    path: '', component: MatPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatRoutingModule { }
