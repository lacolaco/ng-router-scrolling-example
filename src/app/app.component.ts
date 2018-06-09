import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, Scroll, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loc: Location, private router: Router) {
    router.events
      .pipe(filter(e => e instanceof Scroll || e instanceof NavigationEnd))
      .subscribe(e => {
        console.log(e);
      });
  }

  locationBack() {
    window.history.back();
  }

  locationBackAngular() {
    this.loc.back();
  }
}
