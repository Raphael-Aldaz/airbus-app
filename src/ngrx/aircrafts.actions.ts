import { Action } from "@ngrx/store";
import { Aircraft } from "src/app/model/aircraft.model";
import { User } from "src/app/model/user.model";

export enum AircraftActionTypes{
  GET_ALL_AIRCRAFTS = "[Aircraft] Get All Aircraft",
  GET_ALL_AIRCRAFTS_SUCCESS = "[Aircraft] Get All Aircraft Success",
  GET_ALL_AIRCRAFTS_ERROR = "[Aircraft] Get All Aircraft Error",

  GET_DESIGNED_AIRCRAFTS = "[Aircraft] Get Designated Aircraft",
  GET_DESIGNED_AIRCRAFTS_SUCCESS = "[Aircraft] Get Designated Aircraft Success",
  GET_DESIGNED_AIRCRAFTS_ERROR = "[Aircraft] Get Designated Aircraft Error",

  GET_CONCEPTED_AIRCRAFTS = "[Aircraft] Get Concepted Aircraft",
  GET_CONCEPTED_AIRCRAFTS_SUCCESS = "[Aircraft] Get Concepted Aircraft Success",
  GET_CONCEPTED_AIRCRAFTS_ERROR = "[Aircraft] Get Concepted Aircraft Error",

  SEARCH_AIRCRAFTS = "[Aircraft] Search Aircraft",
  SEARCH_AIRCRAFTS_SUCCESS = "[Aircraft] Search Aircraft Success",
  SEARCH_AIRCRAFTS_ERROR = "[Aircraft] Search Aircraft Error",

  ADD_AIRCRAFT = "[Aircraft] Add Aircraft",
  ADD_AIRCRAFT_SUCCESS = "[Aircraft] Add Aircraft Success",
  ADD_AIRCRAFT_ERROR = "[Aircraft] Add Aircraft Error",
}

export enum UserActionTypes{
  GET_USER = "[User] Get User",
  GET_USER_SUCCESS = "[User] Get User Success",
  GET_USER_ERROR = "[User] Get User Error",

  USER_IS_CONNECTED = "[User] User is Connected",

}
export class AddAircraftACTION implements Action {
  type: AircraftActionTypes = AircraftActionTypes.ADD_AIRCRAFT;
  constructor(public payload : any) {console.log(payload, 'a') }
}

export class AddAircraftSuccessACTION implements Action {
  type: AircraftActionTypes = AircraftActionTypes.ADD_AIRCRAFT_SUCCESS;
  constructor(public payload : Aircraft) { }
}

export class AddAircraftErrorACTION implements Action {
  type: AircraftActionTypes = AircraftActionTypes.ADD_AIRCRAFT_ERROR;
  constructor(public payload : string) { }
}

export class GetAllAircraftACTION implements Action {
  type: AircraftActionTypes = AircraftActionTypes.GET_ALL_AIRCRAFTS;
  constructor(public payload : any) { }
}

export class GetAllAircraftSuccessACTION implements Action {
  type: AircraftActionTypes = AircraftActionTypes.GET_ALL_AIRCRAFTS_SUCCESS;
  constructor(public payload : Aircraft[]) { }
}

export class GetAllAircraftErrorACTION implements Action {
  type: AircraftActionTypes = AircraftActionTypes.GET_ALL_AIRCRAFTS_ERROR;
  constructor(public payload : string) { }
}

export class GetDesignedAircraftACTION implements Action {
  type: AircraftActionTypes = AircraftActionTypes.GET_DESIGNED_AIRCRAFTS;
  constructor(public payload:any){}
}

export class GetDesignedAircraftSuccessACTION implements Action {
  type: AircraftActionTypes = AircraftActionTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS;
  constructor(public payload:Aircraft[]) { }
}

export class GetDesignedAircraftErrorACTION implements Action {
  type: AircraftActionTypes = AircraftActionTypes.GET_DESIGNED_AIRCRAFTS_ERROR;
  constructor(public payload:string){}
}

export class GetConceptedAircraftACTION implements Action {
  type: AircraftActionTypes = AircraftActionTypes.GET_CONCEPTED_AIRCRAFTS;
  constructor(public payload:any){}
}

export class GetConceptedAircraftSuccessACTION implements Action {
  type : AircraftActionTypes = AircraftActionTypes.GET_CONCEPTED_AIRCRAFTS_SUCCESS;
  constructor(public payload:Aircraft[]){}
}

export class GetConceptedAircraftErrorACTION implements Action {
  type: AircraftActionTypes = AircraftActionTypes.GET_ALL_AIRCRAFTS_ERROR;
  constructor( public payload:string){}
}
export class SearchAircraftAction implements Action {
  type: AircraftActionTypes = AircraftActionTypes.SEARCH_AIRCRAFTS;
  constructor(public payload:any){}
}

export class SearchAircraftSuccessACTION implements Action {
  type: AircraftActionTypes = AircraftActionTypes.SEARCH_AIRCRAFTS_SUCCESS;
  constructor(public payload:Aircraft[]){}
}
export class SearchAircraftErrorACTION implements Action {
  type: AircraftActionTypes = AircraftActionTypes.SEARCH_AIRCRAFTS_ERROR;
  constructor(public payload:string){}
}

export class GetUserACTION implements Action {
  type: UserActionTypes = UserActionTypes.GET_USER;
  constructor(public payload:any){}
}
export class GetUserSuccessACTION implements Action {
  type: UserActionTypes = UserActionTypes.GET_USER_SUCCESS;
  constructor(public payload:User){
  }
}
export class GetUserErrorACTION implements Action {
  type: UserActionTypes = UserActionTypes.GET_USER_ERROR;
  constructor(public payload: string){}
}

export class UserIsConnectedACTION implements Action {
  type: UserActionTypes = UserActionTypes.USER_IS_CONNECTED;
  constructor(public payload:boolean){}
}



export type AircraftActions = GetAllAircraftACTION | GetAllAircraftSuccessACTION | GetAllAircraftErrorACTION | GetDesignedAircraftACTION | GetDesignedAircraftSuccessACTION | GetDesignedAircraftACTION | GetDesignedAircraftErrorACTION | GetConceptedAircraftACTION | GetConceptedAircraftSuccessACTION | GetConceptedAircraftErrorACTION | SearchAircraftAction | SearchAircraftSuccessACTION | SearchAircraftErrorACTION;

export type UserActions = GetAllAircraftACTION | GetAllAircraftSuccessACTION | GetAllAircraftErrorACTION | UserIsConnectedACTION
