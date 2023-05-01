import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Aircraft } from 'src/app/model/aircraft.model';

@Component({
  selector: 'app-add-aircrafts',
  templateUrl: './add-aircrafts.component.html',
  styleUrls: ['./add-aircrafts.component.css']
})
export class AddAircraftsComponent implements OnInit {
  prog! : string;
  design! : boolean;
  devloppment!: boolean;
  options: string[] = [];

  ngOnInit(): void {

  }

  createPlane(aircraft : NgForm) {
    console.log(aircraft);
  }
}
