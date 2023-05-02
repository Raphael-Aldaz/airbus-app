import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { AircraftsNavBarComponent } from './components/aircrafts/aircrafts-nav-bar/aircrafts-nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AircraftEffects } from 'src/ngrx/aircrafts.effects';
import { LoginComponent } from './components/login/login.component';
import { combinedReducers } from 'src/ngrx/combineReducers';
import { AddAircraftsComponent } from './components/aircrafts/add-aircrafts/add-aircrafts.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AircraftsComponent,
    AircraftsNavBarComponent,
    LoginComponent,
    AddAircraftsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({state: combinedReducers}),
    EffectsModule.forRoot([AircraftEffects]),
    HttpClientModule,
    FormsModule,
    StoreDevtoolsModule.instrument(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
