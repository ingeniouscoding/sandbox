import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsEffects } from './effects/posts-api.effects';
import * as fromPosts from '@sandbox/posts/reducers';

import { PostListComponent } from './containers/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';
import { PostCreateFormComponent } from './components/post-create-form/post-create-form.component';
import { PostCreatePageComponent } from './containers/post-create-page/post-create-page.component';
import { PostEditFormComponent } from './components/post-edit-form/post-edit-form.component';
import { PostEditPageComponent } from './containers/post-edit-page/post-edit-page.component';

@NgModule({
  declarations: [
    PostListComponent,
    PostComponent,
    PostCreateFormComponent,
    PostCreatePageComponent,
    PostEditFormComponent,
    PostEditPageComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromPosts.postsFeatureKey, fromPosts.reducers),
    EffectsModule.forFeature([PostsEffects]),
  ],
})
export class PostsModule { }
