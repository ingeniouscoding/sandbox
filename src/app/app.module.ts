import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { reducers, metaReducers } from './app.reducer';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { AppComponent } from './core/containers/app/app.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './core/router/custom-route-serializer';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
