import { Component, Input } from '@angular/core';
import { PlayerStatsRow } from '../types';

@Component({
  selector: 'baseball-card-stats',
  templateUrl: './baseball-card-stats.component.html',
  styleUrls: ['./baseball-card-stats.component.css'],
})
export class BaseballCardStatsComponent {
  @Input() playerStats: PlayerStatsRow | undefined;
}
