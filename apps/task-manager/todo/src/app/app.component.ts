import { Component, effect, inject, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectMinWidth640Px } from '@nx-angular-demo/shared-domain';
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

  selectMinWidth640Px = this.store.selectSignal(selectMinWidth640Px);

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

  constructor() {
    effect(() => {
      const minWidth640Px = this.selectMinWidth640Px();

      /**
       * When the screen width is greater than 640px, close the sidenav
       * because the header links are displayed in the header.
       */
      if (minWidth640Px) {
        this.sidenavOpen.set(false);
      }
    }, { allowSignalWrites: true })
  }

}
