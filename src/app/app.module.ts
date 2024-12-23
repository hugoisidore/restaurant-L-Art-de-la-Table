import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router'; 

import { AppComponent } from './app.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { ReservationService } from './services/reservation.service';
import { ClientService } from './services/client.service';
import { TableService } from './services/table.service';

const routes: Routes = [
  { path: '', redirectTo: 'reservation', pathMatch: 'full' },
  { path: 'reservation', component: ReservationFormComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AppComponent,
    ReservationFormComponent,
  ],
  providers: [ReservationService, ClientService, TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
