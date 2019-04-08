import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeviceState } from '../store/reducers/device.reducer';
import { Observable, of } from 'rxjs';
import { Device } from '../models/device';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  devices$: Observable<Device[]>;

  constructor(private store: Store<DeviceState>)  { 

  }


  ngOnInit() {
    this.devices$ = this.store.select('devices');
  }   

}
