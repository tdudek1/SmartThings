import { Action } from '@ngrx/store';

export enum DeviceActionTypes {
  LoadDevices = '[Device] Load Devices',
  
  
}

export class LoadDevices implements Action {
  readonly type = DeviceActionTypes.LoadDevices;
}


export type DeviceActions = LoadDevices;
