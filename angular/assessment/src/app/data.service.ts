import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/toPromise";
import {Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class DataService {

  games_url = "http://stage.whgstage.com/front-end-test/games.php";
  jackpot_url = "http://stage.whgstage.com/front-end-test/jackpots.php";

  constructor(private http: HttpClient) {}
  public getGames(){
    return Observable.forkJoin(
      this.http.get(this.jackpot_url).map((res:Response) => res),
      this.http.get(this.games_url).map((res:Response) => res),
    );
  }

}
