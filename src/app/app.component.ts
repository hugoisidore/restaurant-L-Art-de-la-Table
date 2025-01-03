import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, ReservationFormComponent],
})
export class AppComponent {
  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  scrollToFragment(fragment: string): void {
    this.router.navigate([], { fragment }).then(() => {
      this.viewportScroller.scrollToAnchor(fragment);
    });
  }
}
