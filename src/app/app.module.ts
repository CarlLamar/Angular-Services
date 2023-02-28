import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyserviceService } from './myservice.service';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { HttpclientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, NewCmpComponent, HttpclientModule],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpclientModule],
  providers: [MyserviceService, HttpclientComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
