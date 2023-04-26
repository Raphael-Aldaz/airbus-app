import { Aircraft } from "src/app/model/aircraft.model";
import { User } from "src/app/model/user.model";

export enum AircraftsStateEnum{
  LOADING= "Loading",
  LOADED = "Loaded",
  ERROR = "Error",
  INITIAL = "Initial"
}

export interface AircraftsState {
  aircraft: Aircraft[],
  errorMessage : string,
  dataState: AircraftsStateEnum,

}
export interface UserState {
  user: User[]

}

export const aircraftState : AircraftsState = {
  aircraft:[],
  errorMessage :"",
  dataState : AircraftsStateEnum.INITIAL
}
export const userState : UserState = {
  user : []
}

