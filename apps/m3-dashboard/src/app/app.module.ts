import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { AddDashboardItemButtonComponent } from './add-dashboard-item-button/add-dashboard-item-button.component';
import { DashboardService } from './dashboard.service';
import { ComponentTypeSelectComponent } from './component-type-select/component-type-select.component';
import { FormsModule } from '@angular/forms';
import { AdvancedStatsComponent } from './advanced-stats/advanced-stats.component';
import { BaseballCardStatsComponent } from './baseball-card-stats/baseball-card-stats.component';
import { PlayerDataService } from './player-data.service';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, AddDashboardItemButtonComponent, ComponentTypeSelectComponent, AdvancedStatsComponent, BaseballCardStatsComponent],
  imports: [BrowserModule, NoopAnimationsModule, MatToolbarModule, MatButtonModule, MatSelectModule, FormsModule, MatCardModule, MatGridListModule, HttpClientModule],
  providers: [DashboardService, PlayerDataService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
