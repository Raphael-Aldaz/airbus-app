import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable, tap, map } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { GetUserACTION } from 'src/ngrx/aircrafts.actions';
;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'airbus-app-ngrx';
  userLS = localStorage.getItem('user');


  constructor(private store:Store<any>, private route: Router, private authService: AuthService) {
    this.authService.userConnect$ = this.store.pipe(
      select((state)=> state.state.user.isConnected)
    )
  }
  ngOnInit(): void {

    this.authService.userConnect$.subscribe((isConnected) => {
      if(isConnected){
        this.route.navigate(['/aircrafts'])
      } else {
        this.route.navigate(['/login'])
      }
    }),
    this.isLogged()

  }
  isLogged(){
    if(this.userLS){
      const userLS = JSON.parse(this.userLS);
      this.store.dispatch(new GetUserACTION({value:userLS[0]}));
    }
  }
}
