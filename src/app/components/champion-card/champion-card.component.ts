import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-champion-card',
  templateUrl: './champion-card.component.html',
  styleUrls: ['./champion-card.component.scss']
})
export class ChampionCardComponent {
  @Input()
  champions!: string;

}
