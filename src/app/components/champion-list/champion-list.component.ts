import { Component } from '@angular/core';
import { ChampionsService } from 'src/app/services/champions.service';

@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.scss'],
})
export class ChampionListComponent {  

  constructor(public championService: ChampionsService){}
}
