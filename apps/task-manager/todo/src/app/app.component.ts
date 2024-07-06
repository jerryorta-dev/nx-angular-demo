import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@nx-angular-demo/ui-task-manager';
import { NxWelcomeComponent } from './pages/nx-welcome/nx-welcome.component';

@Component({
  standalone: true,
  imports: [ NxWelcomeComponent, RouterModule, HeaderComponent, MatSidenavModule ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

}
