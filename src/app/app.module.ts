import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestPageComponent } from './components/request-page/request-page.component';
import { ResponsePageComponent } from './components/response-page/response-page.component';
import { ConfirmationPageComponent } from './components/confirmation-page/confirmation-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestPageComponent,
    ResponsePageComponent,
    ConfirmationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
