import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent }  from './app.component';
import { AppRoutingModule,routingComponents }  from './app-routing.module';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [BrowserModule, HttpClientModule, RouterModule, AppRoutingModule],
  declarations: [ AppComponent , routingComponents],
  bootstrap:    [ AppComponent ],
})

export class AppModule { }
