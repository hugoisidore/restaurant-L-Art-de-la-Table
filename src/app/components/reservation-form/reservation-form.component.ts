import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class ReservationFormComponent {
  reservation = {
    clientId: '',
    tableId: '',
    date: '',
    nombrePersonnes: 0,
    statut: ''
  };

  constructor(private reservationService: ReservationService) {}

  onSubmit() {
    this.reservationService.createReservation(this.reservation).subscribe(
      response => {
        console.log('Reservation created successfully', response);
      },
      error => {
        console.error('Error creating reservation', error);
      }
    );
  }
}
