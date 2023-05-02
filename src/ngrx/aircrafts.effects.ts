import { Action } from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {concatMap, Observable, mergeMap, map, catchError,of, tap } from "rxjs";
import { AircraftService } from "src/app/services/aircraft.service";
import { AddAircraftACTION, AddAircraftSuccessACTION, AircraftActionTypes, GetAllAircraftErrorACTION, GetAllAircraftSuccessACTION, GetUserACTION, GetUserErrorACTION, GetUserSuccessACTION, SearchAircraftAction, UserActionTypes, UserIsConnectedACTION } from "./aircrafts.actions";
import { Injectable } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { AddAircraftErrorACTION } from "./aircrafts.actions";

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
        return this.authService.login(action.payload.value.email, action.payload.value.password).pipe(
          concatMap((user) =>{
            if(user.length > 0){
              localStorage.setItem('user', JSON.stringify(user))
              return[
                new GetUserSuccessACTION(user),
                new UserIsConnectedACTION(true),
              ];
            } else {
              return[
                new UserIsConnectedACTION(false)
              ]
            }
          }
          ),
          catchError((error) => of(new GetUserErrorACTION(error))),
        )
      })
    )
  )

  addAircraftEffect: Observable<Action> = createEffect(
    ()=> this.effectActions.pipe(
      ofType(AircraftActionTypes.ADD_AIRCRAFT),
      mergeMap((action : AddAircraftACTION) => {
       console.log(action.payload, 'abcd');
            return this.aircraftService.addAircraft(action.payload).pipe(

            map((aircraft) => new AddAircraftSuccessACTION(aircraft)),
            catchError((error) => of(new AddAircraftErrorACTION(error)))
          )
        }
      )
    )
  )


}

