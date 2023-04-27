import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userConnect$! : Observable<boolean>;
  constructor(private http: HttpClient) { }

  public login(email: string, password : string): Observable<any> {
    return this.http.get<User[]>(`http://localhost:3000/users?email=${email}&password=${password}`)
  }
}
