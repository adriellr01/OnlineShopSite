import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'La Tienda Virtual';

  constructor(private router: Router) {
  }

  goToRoles() {
    this.router.navigate(['roles']);
  }
}
