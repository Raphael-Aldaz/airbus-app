import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { GetUserACTION} from 'src/ngrx/aircrafts.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string =""
password:string =""



constructor(private store:Store<any>){

}
  ngOnInit(): void {
  }

  login(value:NgForm){
    this.store.dispatch(new GetUserACTION({value:value}));
  }
}
