import { Component } from '@angular/core';
import { IComponent } from './add-dashboard-item-button/component';
import { DashboardService } from './dashboard.service';
import { Type } from './add-dashboard-item-button/component';
import { PlayerDataService } from './player-data.service';
import { PlayerStatResponse, PlayerStatsRow } from './types';

@Component({
  selector: 'm3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'm3-dashboard';
  components: IComponent[] = [];
  componentType = Type;
  playerId: string | undefined;
  playerStats: PlayerStatsRow | undefined;


  constructor(private dashboardService: DashboardService, private playerDataService: PlayerDataService) {
    this.dashboardService.amountChange.subscribe(value => {
      this.components = value;
    });
  }

  ngOnInit() {
    this.playerDataService.getPlayer().subscribe(data => {
      this.playerId = data?.search_player_all?.queryResults?.row?.player_id;
      if(this.playerId) {
        this.playerDataService.getPlayerStats(this.playerId).subscribe(data => {
          this.playerStats = data?.sport_hitting_tm?.queryResults?.row
        })
      }
    })
  }
}
