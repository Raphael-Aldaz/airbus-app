import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Aircraft } from 'src/app/model/aircraft.model';
import { AddAircraftACTION } from 'src/ngrx/aircrafts.actions';


@Component({
  selector: 'app-add-aircrafts',
  templateUrl: './add-aircrafts.component.html',
  styleUrls: ['./add-aircrafts.component.css']
})
export class AddAircraftsComponent implements OnInit {
  selectedOptions: string[] = [];
  createAircraftFormGroupe!: FormGroup;
  designStatus!: boolean;
  devloppmentStatus!: boolean;
constructor(private store:Store){
  this.createAircraftFormGroupe = new FormGroup({
    prog: new FormControl('', Validators.required),
    design: new FormControl('', Validators.required),
    developpment: new FormControl('', Validators.required),
    options :new FormGroup({
      wings: new FormControl(false),
      engines: new FormControl(false),
      tail: new FormControl(false),
      landingGear: new FormControl(false),
      cockpit: new FormControl(false)
    }),



  });
}


  ngOnInit(): void {

  }

  createPlane() {
    const options:FormGroup = this.createAircraftFormGroupe.get('options') as FormGroup;
    this.selectedOptions = Object.keys(options.controls)
      .filter(key => options.controls[key].value === true)
      this.designStatus = this.createAircraftFormGroupe.value.design ==="1" ? false : true;
      this.devloppmentStatus = this.createAircraftFormGroupe.value.developpment ==="1"? false : true;
      const aircraft = new Aircraft(
        this.createAircraftFormGroupe.value.prog,
        this.designStatus,
        this.devloppmentStatus,
        this.selectedOptions,
      )
      this.store.dispatch(new AddAircraftACTION(aircraft));

  }
}
