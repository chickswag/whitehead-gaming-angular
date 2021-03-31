import { Component, OnInit } from '@angular/core';
import { SharedService} from "../service/shared.service";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(private service : SharedService) { }

  ngOnInit(): void {
  }

}
