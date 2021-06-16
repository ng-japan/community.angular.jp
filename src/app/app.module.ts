import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RendererModule, TransferHttpCacheModule } from '@nguniversal/common/clover';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'app' }),
    RendererModule.forRoot(),
    HttpClientModule,
    TransferHttpCacheModule,

    SharedModule,

    AppRoutingModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
