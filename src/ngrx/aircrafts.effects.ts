import { Action } from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import { Observable, mergeMap, map, catchError,of, tap } from "rxjs";
import { AircraftService } from "src/app/services/aircraft.service";
import { AircraftActionTypes, GetAllAircraftErrorACTION, GetAllAircraftSuccessACTION, GetUserACTION, GetUserErrorACTION, GetUserSuccessACTION, SearchAircraftAction, UserActionTypes } from "./aircrafts.actions";
import { Injectable } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

//import ofType


@Injectable()
export class AircraftEffects{
  constructor(private authService : AuthService, private aircraftService: AircraftService, private effectActions: Actions){}

  getAllAircraftEffect: Observable<Action> = createEffect(
    () => this.effectActions.pipe(
      ofType(AircraftActionTypes.GET_ALL_AIRCRAFTS),
      mergeMap((action)=>{
        return this.aircraftService.getAircrafts().pipe(
          map((aircrafts) => new GetAllAircraftSuccessACTION(aircrafts)),
          catchError((error) => of(new GetAllAircraftErrorACTION(error)))
        )
      })

    )
  )

  getDesignedAircraftEffect: Observable<Action> = createEffect(
    ()=> this.effectActions.pipe(
      ofType(AircraftActionTypes.GET_DESIGNED_AIRCRAFTS),
      mergeMap((action)=>{
        return this.aircraftService.getDesignedAircraft().pipe(
          map((aircraft) => new GetAllAircraftSuccessACTION(aircraft)),
          catchError((error) => of(new GetAllAircraftErrorACTION(error)))
          )
      })
    )
  )

  getConceptedAircraftEffect: Observable<Action> = createEffect(
    ()=> this.effectActions.pipe(
      ofType(AircraftActionTypes.GET_CONCEPTED_AIRCRAFTS),
      mergeMap((action) => {
        return this.aircraftService.getConceptedAircraft().pipe(
          map((aircraft) => new GetAllAircraftSuccessACTION(aircraft)),
          catchError((error) => of(new GetAllAircraftErrorACTION(error)))
        )
      })
    )
  )

  searchAircraftEffect: Observable<Action> = createEffect(
    ()=> this.effectActions.pipe(
      ofType(AircraftActionTypes.SEARCH_AIRCRAFTS),
      mergeMap((action: SearchAircraftAction) => {
        return this.aircraftService.searchAircrafts(action.payload.value.prog).pipe(
          tap(data => console.log(data)),
          map((aircraft) => new GetAllAircraftSuccessACTION(aircraft)),
          catchError((error) => of(new GetAllAircraftErrorACTION(error)))
        )
      }
      )
    )
  )

  getUserEffect: Observable<Action> = createEffect(
    ()=> this.effectActions.pipe(
      ofType(UserActionTypes.GET_USER),
      mergeMap((action : GetUserACTION)=> {
        console.log(action)
        return this.authService.login(action.payload.value.email, action.payload.value.password).pipe(
          map((user) =>
            new GetUserSuccessACTION(user),
          ),
          catchError((error) => of(new GetUserErrorACTION(error))),
        )
      })
    )
  )



}
