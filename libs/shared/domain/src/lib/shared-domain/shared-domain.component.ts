import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'lib-shared-domain',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-domain.component.html',
  styleUrl: './shared-domain.component.scss'
})
export class SharedDomainComponent {}
