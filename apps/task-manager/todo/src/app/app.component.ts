import { Component, inject, Signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { HeaderComponent } from '@nx-angular-demo/ui-task-manager';
import { selectIsIOS, UiIosNotchCalc } from '@nx-angular-demo/shared-domain';
import { NxWelcomeComponent } from './pages/nx-welcome/nx-welcome.component';

@Component({
  standalone: true,
  imports: [ NxWelcomeComponent, RouterModule, HeaderComponent, MatSidenavModule ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  store = inject(Store);

  iOSCalc: Signal<UiIosNotchCalc> = this.store.selectSignal(selectIsIOS);

}
