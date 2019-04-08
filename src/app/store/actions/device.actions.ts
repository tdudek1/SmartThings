import { Action } from '@ngrx/store';
import { Device } from 'src/app/models/device';

export enum DeviceActionTypes {
  LoadDevices = '[Device] Load Devices',
  LoadDevicesSuccess = '[Device] Load Devices'
}

export class LoadDevices implements Action {
  readonly type = DeviceActionTypes.LoadDevices;
}

export class LoadDevicesSuccess implements Action {
  readonly type = DeviceActionTypes.LoadDevices;

  constructor(public payload: Device[])  {}
}


export type Actions = LoadDevicesSuccess;
