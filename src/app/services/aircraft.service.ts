import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aircraft } from '../model/aircraft.model';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  constructor(private http:HttpClient) { }

  public getAircrafts(): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>('http://localhost:3000/aircrafts');
  }

  public getDesignedAircraft(): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>('http://localhost:3000/aircrafts?design=true');
  }

  public getConceptedAircraft(): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>('http://localhost:3000/aircrafts?developpment=true');
  }
  public searchAircrafts(searchText: string): Observable<Aircraft[]> {
    const params = new HttpParams().set('prog_like',searchText)
    return this.http.get<Aircraft[]>('http://localhost:3000/aircrafts/', {params})
  }

  public addAircraft(aircraft: Aircraft): Observable<Aircraft> {
    return this.http.post<Aircraft>('http://localhost:3000/aircrafts', aircraft);
  }

  public removeAircraft(aircraft: Aircraft): Observable<Aircraft> {
    return this.http.delete<Aircraft>(`http://localhost:3000/aircrafts/${aircraft.id}`)
  }
}
