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
  showAddAircraftForm = false;
  aircraftToDelete! : Aircraft;
  showDetails: boolean[] = [];

  constructor( private store:Store<any>){}
  ngOnInit(): void {
    this.aircrafts$ = this.store.pipe(
      map((state) => state.state.aircraft),
    )
  }
  toggleDetails(index: number) {
    this.showDetails[index] = !this.showDetails[index];
  }
  createAircrafts(aircraft: Aircraft) {
    this.store.dispatch(new AddAircraftACTION({value : aircraft}))
  }

  isObjectIsEmpty(object : any){
    return Object.keys(object).length > 1
  }

  deleteAircraft(aircraft: Aircraft){
    console.log(aircraft)
  }

}
