import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LiveComponent } from './live/live.component';
import { BlackjackComponent } from './blackjack/blackjack.component';
import { TableComponent } from './table/table.component';
import { JackpotComponent } from './jackpot/jackpot.component';
import { PokerComponent } from './poker/poker.component';
import { OtherComponent } from './other/other.component';
import { RouletteComponent } from './roulette/roulette.component';
import { SlotComponent } from './slot/slot.component';
import { NewComponent } from './new/new.component';
import { TopComponent } from './top/top.component';
import { GamesComponent } from './games/games.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LiveComponent,
    BlackjackComponent,
    TableComponent,
    JackpotComponent,
    PokerComponent,
    OtherComponent,
    RouletteComponent,
    SlotComponent,
    NewComponent,
    TopComponent,
    GamesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
