import { Component, Input } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'add-dashboard-item-button',
  templateUrl: './add-dashboard-item-button.component.html'
})
export class AddDashboardItemButtonComponent {
    @Input() type: string = ''
    
    constructor(private dashboardService: DashboardService){}

    add() {
        this.dashboardService.addComponent(this.type);
    }
}