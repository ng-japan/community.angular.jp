import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridLayoutModule } from '@lacolaco/ngx-grid-layout';
import { ReactiveStoreModule } from '@lacolaco/ngx-store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initialState } from './initialState';
import { customElements } from './view/element';
import { CommunitiesModule } from './view/page/communities/communities.module';
import { HomeModule } from './view/page/home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GridLayoutModule,
    MatToolbarModule,
    ReactiveStoreModule.forRoot(initialState),
    AppRoutingModule,
    HomeModule,
    CommunitiesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    customElements.forEach(customElement => {
      window.customElements.define(customElement.selector, customElement.elementClass);
    });
  }
}
