import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { LoginComponent } from './components/login/login.component';
import { AdminGuard } from './components/admin.guard';

const routes: Routes = [
  {
    path: 'aircrafts',
    component : AircraftsComponent,
    canActivate:[AdminGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
