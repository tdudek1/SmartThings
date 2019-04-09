import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { DeviceActionTypes, LoadDevicesSuccess } from '../actions/device.actions';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class DeviceEffects {



  constructor(private actions$: Actions) {}

  @Effect()
  loadDevices$: Observable<Action> = this.actions$.pipe(
    ofType(DeviceActionTypes.LoadDevices),
    switchMap(() => {
      console.log('ollo');

      return of(new LoadDevicesSuccess([]));
    }));
}
