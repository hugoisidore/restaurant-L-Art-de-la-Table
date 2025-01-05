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
    emailId: '',
    date: '',
    nombrePersonnes: 0,
    message: ''
  };

   // Plages de dates et heures
   minDate = this.formatDateForInput(new Date());
   maxDate = this.formatDateForInput(new Date(new Date().setMonth(new Date().getMonth() + 1))); // 1 mois à partir d'aujourd'hui
   step = 1800; // Incrément de 30 minutes (en secondes)

  constructor(private reservationService: ReservationService) {}

  onSubmit() {
    if (this.isDateValid(this.reservation.date)) {
      this.reservationService.createReservation(this.reservation).subscribe(
        response => {
          console.log('Reservation created successfully', response);
        },
        error => {
          console.error('Error creating reservation', error);
        }
      );
    } else {
      console.error('Impossible de soumettre le formulaire : date ou heure invalide.');
    }
  }

  // Validation pour les dates/heures spécifiques
  isDateValid(dateString: string): boolean {
    if (!dateString) return false;

    const date = new Date(dateString);
    const day = date.getDay(); // 0 = Dimanche, 6 = Samedi
    const hours = date.getHours();

    // Vérifier que ce n'est pas dimanche et que les heures sont dans les plages autorisées
  if (day !== 0 && ((hours >= 12 && hours < 14) || (hours >= 19 && hours < 21))) {
    return true;
  }

  return false;
  }
  
  // Vérification de la validité à chaque changement de date
  checkDateValidity() {
    if (!this.isDateValid(this.reservation.date)) {
    console.error('La date ou l’heure sélectionnée est invalide.');
    }
  }

  // Méthode pour formater les dates pour le champ input
  private formatDateForInput(date: Date): string {
    return date.toISOString().slice(0, 16); // YYYY-MM-DDTHH:mm
  }
}