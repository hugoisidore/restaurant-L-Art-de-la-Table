import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, ExtraOptions } from '@angular/router'; 

import { AppComponent } from './app.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { ReservationService } from './services/reservation.service';
import { ClientService } from './services/client.service';
import { TableService } from './services/table.service';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'reservation', component: ReservationFormComponent }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // Restaure la position de défilement
  anchorScrolling: 'enabled',          // Active le défilement vers les ancrages
  scrollOffset: [0, 50],               // Décale légèrement pour laisser de l'espace au menu
};

@NgModule({
  declarations: [ 
    AppComponent,
    ReservationFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, routerOptions),
  ],
  providers: [ReservationService, ClientService, TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
