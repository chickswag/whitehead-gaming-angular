import {Component, OnInit, Input} from '@angular/core';
import {Games} from "./games";
@Component ({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',

})

export class AppComponent implements OnInit{

  @Input() games :Games;
  constructor() { }
  ngOnInit() {
    this.getGamesData()
  }
  getGamesData(){
    return

  }
}
