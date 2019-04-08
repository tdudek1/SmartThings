import { Action } from '@ngrx/store';
import { Device } from 'src/app/models/device';
import * as DeviceActions from 'src/app/store/actions/device.actions';


export interface DeviceState extends Array<Device> {
}

export const initialState: DeviceState = [{id:1,name:'Office Lamp'} as Device, {id:2,name:'Office Light'}];

export function DevicesReducer(state = initialState, action: DeviceActions.Actions): DeviceState {
  switch (action.type) {
    case DeviceActions.DeviceActionTypes.LoadDevicesSuccess:
      return action.payload;
    default:
      return state;
  }
}
