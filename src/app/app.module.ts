import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { DevicesReducer } from './store/reducers/device.reducer';

const appRoutes: Routes = [
  { 
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({devices: DevicesReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
