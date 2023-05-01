import { Component, OnInit } from '@angular/core';
import { AircraftsState, AircraftsStateEnum } from 'src/ngrx/aircrafts.state';
import {Observable, map} from 'rxjs';
import { Store } from '@ngrx/store';
import { AddAircraftACTION } from 'src/ngrx/aircrafts.actions';
import { Aircraft } from 'src/app/model/aircraft.model';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit  {
  aircrafts$:Observable<AircraftsState> |null = null;
  readonly dataStateEnum = AircraftsStateEnum;
  showAddAircraftForm = true;

  constructor( private store:Store<any>){}
  ngOnInit(): void {
    this.aircrafts$ = this.store.pipe(
      map((state) => state.state.aircraft),
    )
  }
  createAircrafts(aircraft: Aircraft) {
    this.store.dispatch(new AddAircraftACTION({value : aircraft}))
  }

}
