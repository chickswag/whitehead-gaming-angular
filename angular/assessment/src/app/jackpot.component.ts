import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataService} from "./data.service";


@Component ({
  selector: 'my-app',
  templateUrl: 'app/jackpot.component.html',
})

export class JackpotComponent implements OnInit {

  games : any;
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.getGamesData()
  }
  getGamesData(){
    this.dataService.getGames().subscribe(responseList => {
      let all_games = responseList[1];
      let jackpot_games = responseList[0];
      let new_jackpot_games = Array();
      Object.keys(jackpot_games).forEach(function(jackpot) {
        Object.keys(all_games).forEach(function(key) {
          if(all_games[key]['id'] == jackpot_games[jackpot]['game']){
            new_jackpot_games.push(
              {'categories' : all_games[key]['categories'],
                'id' : all_games[key]['name'],
                'name':all_games[key]['name'],
                'image' : all_games[key]['image'],
                'amount' : jackpot_games[jackpot]['amount'],
              }
            )
          }
        });
      })
      this.games = new_jackpot_games;
    });
  }
}
