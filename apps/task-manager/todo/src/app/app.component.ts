import { Component, inject, signal, Signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { HeaderComponent, UiTaskMangerRouterLink } from '@nx-angular-demo/ui-task-manager';
import { NxWelcomeComponent } from './pages/nx-welcome/nx-welcome.component';

@Component({
  standalone: true,
  imports: [ NxWelcomeComponent, RouterModule, HeaderComponent, MatSidenavModule ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  store = inject(Store);

  fixedTopGap = 64;

  sidenavOpen = signal(false);

  routerLinks: UiTaskMangerRouterLink[] = [
    {
      label: 'Home',
      route: '/home'
    },
    {
      label: 'Welcome',
      route: '/welcome'
    }
  ];

}
