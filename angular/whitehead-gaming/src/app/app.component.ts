import { Component , OnInit, Input,OnDestroy} from '@angular/core';
import { GamesComponent} from "./games/games.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'whitehead-gaming';

  constructor() {
  }
  ngOnInit() {

  }

}
