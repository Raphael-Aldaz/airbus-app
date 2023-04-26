import { Action } from "@ngrx/store";
import { AircraftsState, AircraftsStateEnum, UserState, aircraftState, userState } from "./aircrafts.state";
import { AircraftActionTypes, AircraftActions, SearchAircraftAction, UserActionTypes, UserActions } from "./aircrafts.actions";

export function AircraftReducer(state: AircraftsState = aircraftState, action:Action) {

  switch(action.type){
    case AircraftActionTypes.GET_ALL_AIRCRAFTS :
      return{...state, dataState:AircraftsStateEnum.LOADING}
    case AircraftActionTypes.GET_ALL_AIRCRAFTS_SUCCESS :
      return {...state, dataState:AircraftsStateEnum.LOADED, aircraft:(<AircraftActions>action).payload}
    case AircraftActionTypes.GET_ALL_AIRCRAFTS_ERROR :
      return{...state, dataState:AircraftsStateEnum.ERROR, errorMessage : (<AircraftActions>action).payload}

    case AircraftActionTypes.GET_DESIGNED_AIRCRAFTS:
      return{...state, dataState:AircraftsStateEnum.LOADING}
    case AircraftActionTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS:
      return {...state, dataState:AircraftsStateEnum.LOADED, aircraft:(<AircraftActions>action).payload}
    case AircraftActionTypes.GET_DESIGNED_AIRCRAFTS_ERROR:
      return {...state, dataState:AircraftsStateEnum.ERROR, errorMessage : (<AircraftActions>action).payload}

    case AircraftActionTypes.GET_CONCEPTED_AIRCRAFTS:
      return{...state, dataState:AircraftsStateEnum.LOADING}
    case AircraftActionTypes.GET_CONCEPTED_AIRCRAFTS_SUCCESS:
      return{...state, dataState:AircraftsStateEnum.LOADED, aircraft:(<AircraftActions>action).payload}
    case AircraftActionTypes.GET_CONCEPTED_AIRCRAFTS_ERROR:
      return{...state, dataState:AircraftsStateEnum.ERROR, errorMessage : (<AircraftActions>action).payload}

    case AircraftActionTypes.SEARCH_AIRCRAFTS:
      return{...state, dataState:AircraftsStateEnum.LOADING}
    case AircraftActionTypes.SEARCH_AIRCRAFTS_SUCCESS:
      return{...state, dataState:AircraftsStateEnum.LOADED, aircraft:(<AircraftActions>action).payload}
    case AircraftActionTypes.SEARCH_AIRCRAFTS_ERROR:
      return{...state, dataState:AircraftsStateEnum.ERROR, errorMessage : (<AircraftActions>action).payload}
    default :
      return{...state}
  }

}

export function UserReducer(state: UserState = userState, action:Action) {
  switch(action.type){
    case UserActionTypes.GET_USER_ERROR:
      return{...state, dataState:AircraftsStateEnum.LOADING}
    case UserActionTypes.GET_USER_SUCCESS:
      return{...state, dataState:AircraftsStateEnum.LOADED, user:(<UserActions>action).payload[0]}
    case UserActionTypes.GET_USER_ERROR:
      return{...state, dataState:AircraftsStateEnum.ERROR, errorMessage : (<UserActions>action).payload}
    default:
      return{...state}
  }
}
