import {NgModule, OnInit} from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { TopComponent }  from './top.component';
import { NewComponent }  from './new.component';
import { HomeComponent }  from './home.component';
import { SlotComponent }  from './slot.component';
import { JackpotComponent }  from './jackpot.component';
import {RouletteComponent} from "./roulette.component";
import {OtherComponent} from "./other.component";
import {PokerComponent} from "./poker.component";
import {AppComponent} from "./app.component";
import { DataService } from "./data.service";
import {LiveComponent} from "./live.component";
import {BlackjackComponent} from "./blackjack.component";
import {TableComponent} from "./table.component";
const routes: Routes = [
  { path: 'top', component: TopComponent },
  { path: 'new', component: NewComponent },
  { path: 'slots', component: SlotComponent },
  { path: 'roulette', component: RouletteComponent },
  { path: 'other', component: OtherComponent },
  { path: 'poker', component: PokerComponent },
  { path: 'jackpot', component: JackpotComponent },
  { path: '', component: HomeComponent },
  { path: 'live', component: LiveComponent },
  { path: 'blackjack', component: BlackjackComponent },
  { path: 'table', component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule],
  exports: [RouterModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppRoutingModule  {}
export const routingComponents = [AppComponent,TopComponent,NewComponent,HomeComponent,SlotComponent,JackpotComponent,
  PokerComponent,LiveComponent,BlackjackComponent,TableComponent,
OtherComponent,RouletteComponent]
