import { Component, Input } from '@angular/core';
import { PlayerStatResponse, PlayerStatsRow } from '../types';

@Component({
  selector: 'advanced-stats',
  templateUrl: './advanced-stats.component.html',
  styleUrls: ['./advanced-stats.component.css']
})
export class AdvancedStatsComponent {
    @Input() playerStats: PlayerStatsRow | undefined;

    constructor() {}

    getAbPerHr(): string {
      return (Number(this?.playerStats?.ab)/Number(this?.playerStats?.hr)).toFixed(2).toString();
    }

    getBbPerK(): string {
      return (Number(this?.playerStats?.bb)/Number(this?.playerStats?.so)).toFixed(2).toString();
    }
}