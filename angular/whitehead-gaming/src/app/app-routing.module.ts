import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LiveComponent} from "./live/live.component";
import {TableComponent} from "./table/table.component";
import {BlackjackComponent} from "./blackjack/blackjack.component";
import {JackpotComponent} from "./jackpot/jackpot.component";
import {PokerComponent} from "./poker/poker.component";
import {OtherComponent} from "./other/other.component";
import {RouletteComponent} from "./roulette/roulette.component";
import {SlotComponent} from "./slot/slot.component";
import {NewComponent} from "./new/new.component";
import {TopComponent} from "./top/top.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: 'top', component: TopComponent },
  { path: 'new', component: NewComponent },
  { path: 'slots', component: SlotComponent },
  { path: 'roulette', component: RouletteComponent },
  { path: 'other', component: OtherComponent },
  { path: 'poker', component: PokerComponent },
  { path: 'jackpot', component: JackpotComponent },
  { path: 'live', component: LiveComponent },
  { path: 'blackjack', component: BlackjackComponent },
  { path: 'table', component: TableComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
