import { ActionReducerMap,  combineReducers } from "@ngrx/store";
import { AircraftsState, UserState } from "./aircrafts.state";
import { AircraftReducer, UserReducer } from "./aircrafts.reducer";
export interface AppState{
  aircraft: AircraftsState
  user : UserState
}

export const reducers: ActionReducerMap <AppState> ={
  aircraft : AircraftReducer,
  user : UserReducer
}

export const combinedReducers = combineReducers(reducers);
