import { Component, input, output, signal } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiTaskMangerRouterLink } from './header.model';

@Component({
  selector: 'ui-task-manager-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  routerLinks = input(<UiTaskMangerRouterLink[]>[]);
  toggleSidenav = output()

}
