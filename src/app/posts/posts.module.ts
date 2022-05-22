import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './containers/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';

import * as fromPosts from '@sandbox/posts/reducers';
import { PostsEffects } from './effects/posts-api.effects';

@NgModule({
  declarations: [
    PostListComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    StoreModule.forFeature(fromPosts.postsFeatureKey, fromPosts.reducer),
    EffectsModule.forFeature([PostsEffects]),
  ]
})
export class PostsModule { }
