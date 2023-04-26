import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Aircraft } from 'src/app/model/aircraft.model';
import { AircraftActionTypes, GetAllAircraftACTION, GetConceptedAircraftACTION, GetDesignedAircraftACTION, SearchAircraftAction } from 'src/ngrx/aircrafts.actions';

@Component({
  selector: 'app-aircrafts-nav-bar',
  templateUrl: './aircrafts-nav-bar.component.html',
  styleUrls: ['./aircrafts-nav-bar.component.css']
})
export class AircraftsNavBarComponent implements OnInit {
  value : string ="";
  aircraft: Aircraft = new Aircraft(0,'', false,false);
  @Output() eventEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private store:Store<any>){}

  ngOnInit(): void {

  }

  onSearch(value : any){
    this.store.dispatch(new SearchAircraftAction({value}))
  }

  getAllAircraft(){
    this.store.dispatch(new GetAllAircraftACTION({}))
  }
  getDesignedAircraft(){
    this.store.dispatch(new GetDesignedAircraftACTION({}))
  }
  getConceptedAircraft(){
    this.store.dispatch(new GetConceptedAircraftACTION({}))
  }

}
