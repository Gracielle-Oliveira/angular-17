import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { HomeComponent } from './page/home/home.component';
import { AppRountingModule } from './app-routing.module';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './page/login/login.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    HomeComponent,
    AppRountingModule,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
