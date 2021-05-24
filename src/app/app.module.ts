import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { PolicyModule } from './pages/policy/policy.module';
import { LocalModule } from './pages/local/local.module';
import { AboutUsModule } from './pages/about/about.module';
import { LearnModule } from './pages/learn/learn.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,

    AppRoutingModule,
    HomeModule,
    PolicyModule,
    LocalModule,
    AboutUsModule,
    LearnModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
