import { Action } from '@ngrx/store';
import { Device } from 'src/app/models/device';


export interface DeviceState extends Array<Device> {
}

export const initialState: DeviceState = [{id:1,name:'Office Lamp'} as Device, {id:2,name:'Office Light'}];

export function DevicesReducer(state = initialState, action: Action): DeviceState {
  switch (action.type) {


    default:
      return state;
  }
}
