import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Type } from '../add-dashboard-item-button/component';

@Component({
  selector: 'component-type-select',
  templateUrl: './component-type-select.component.html',
  styleUrls: ['./component-type-select.component.css']
})
export class ComponentTypeSelectComponent {
    componentType = Type;
    @Input() type: string = '';
    @Output() typeChange: EventEmitter<string> = new EventEmitter();

    constructor(private dashboardService: DashboardService){}
    
    handleTypeChange(type: string) {
        this.typeChange.emit(this.type);
    }

}