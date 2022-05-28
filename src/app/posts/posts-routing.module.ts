import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostCreatePageComponent } from './containers/post-create-page/post-create-page.component';
import { PostEditPageComponent } from './containers/post-edit-page/post-edit-page.component';
import { PostListComponent } from './containers/post-list/post-list.component';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
  },
  {
    path: 'create',
    component: PostCreatePageComponent,
  },
  {
    path: 'edit/:id',
    component: PostEditPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule { }
