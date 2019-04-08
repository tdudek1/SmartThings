import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { DeviceActionTypes } from '../actions/device.actions';


@Injectable()
export class DeviceEffects {



  constructor(private actions$: Actions) {}

  @Effect()
  loadDevices$: Observable<Action> = this.actions$.pipe(
    ofType(DeviceActionTypes.LoadDevices),
    switchMap(() => {
      console.log('ollo');

      return [];
    }));
}
