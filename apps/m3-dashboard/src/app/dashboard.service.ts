import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IComponent, Type } from './add-dashboard-item-button/component';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
    private components: IComponent[] = [];
    amountChange: Subject<IComponent[]> = new Subject<IComponent[]>();

    constructor() {
        this.amountChange.subscribe((value) => {
            this.components = value;
        })
    }
    
    addComponent(type: string) {
        this.components.push({type: type})
        this.amountChange.next(this.components);
    }
}
