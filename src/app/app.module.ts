import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridLayoutModule } from '@lacolaco/ngx-grid-layout';
import { ReactiveStoreModule } from '@lacolaco/ngx-store';
import { AppComponent } from './app.component';
import { initialState } from './initialState';
import { customElements, declarations, entryComponents } from './view';

@NgModule({
  declarations: [AppComponent, ...declarations],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GridLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    ReactiveStoreModule.forRoot(initialState),
  ],
  entryComponents: [...entryComponents],
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
