import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Store } from '@ngrx/store';
import { selectMinWidth640Px } from '@nx-angular-demo/shared-domain';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  store = inject(Store);
  selectMinWidth640Px = this.store.selectSignal(selectMinWidth640Px);
}

export const HOME_ROUTES = [
  {
      path: '',
    component: HomeComponent,
  }
];
