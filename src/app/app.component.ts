import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly logoPath = '../assets/voyage-logo.png';
  showTopBar = false;
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.onRouteChange();
    });
  }

  onRouteChange(): void {
    if (this.router.url === '/' || this.router.url === '') {
      this.showTopBar = false;
    }
    else {
      this.showTopBar = true;
    }
  }
}
