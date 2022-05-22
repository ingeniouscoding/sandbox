import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './containers/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';

import * as fromPosts from '@sandbox/posts/reducers';
import { PostsEffects } from './effects/posts-api.effects';
import { PostCreateFormComponent } from './components/post-create-form/post-create-form.component';
import { PostCreatePageComponent } from './containers/post-create-page/post-create-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostListComponent,
    PostComponent,
    PostCreateFormComponent,
    PostCreatePageComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    StoreModule.forFeature(fromPosts.postsFeatureKey, fromPosts.reducer),
    EffectsModule.forFeature([PostsEffects]),
  ]
})
export class PostsModule { }
