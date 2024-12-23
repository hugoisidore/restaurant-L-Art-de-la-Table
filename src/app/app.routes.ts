import { Routes } from '@angular/router';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'reservation', pathMatch: 'full' },
    { path: 'reservation', component: ReservationFormComponent }
  ];
