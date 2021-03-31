import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/toPromise";
import {forkJoin} from "rxjs";
import {concatMap, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  games_url = "http://stage.whgstage.com/front-end-test/games.php";
  jackpot_url = "http://stage.whgstage.com/front-end-test/jackpots.php";

  constructor(private http: HttpClient) {}
  public getGames(){

    return this.http.get(this.games_url).map(res => Response),
      this.http.get(this.games_url).map(res => Response)

  }
}
