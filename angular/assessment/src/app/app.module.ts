import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule,routingComponents }  from './app-routing.module';
import {RouterModule} from "@angular/router";
import { AppComponent }  from './app.component';
import {MainnavComponent} from "./mainnav.component";

@NgModule({
  imports: [BrowserModule, HttpClientModule, RouterModule, AppRoutingModule],
  declarations: [ AppComponent, MainnavComponent],
  bootstrap:    [ AppComponent ],
})

export class AppModule { }
