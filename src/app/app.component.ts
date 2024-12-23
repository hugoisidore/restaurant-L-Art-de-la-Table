import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, 
  imports: [RouterModule, ReservationFormComponent]
})
export class AppComponent {
  title = 'restaurant';
}
