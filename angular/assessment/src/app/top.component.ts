import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "./data.service";

@Component ({
  selector: 'my-app',
  templateUrl: 'app/top.component.html',
})
export class TopComponent implements OnInit {

  games : any;
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.getGamesData()
  }
  getGamesData(){
    this.dataService.getGames().subscribe(responseList => {
      let all_games = responseList[1];
      let jackpot_games = responseList[0];
      Object.keys(jackpot_games).forEach(function(jackpot) {
        Object.keys(all_games).forEach(function(key) {
          if(all_games[key]['id'] == jackpot_games[jackpot]['game']){
            all_games[key]['amount'] = jackpot_games[jackpot]['amount'];
          }
        });
      })
      this.games = all_games;
    });
  }


}
