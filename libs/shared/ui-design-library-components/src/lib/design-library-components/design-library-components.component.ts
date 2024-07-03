import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'dlc-design-library-components',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './design-library-components.component.html',
  styleUrl: './design-library-components.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesignLibraryComponentsComponent {}
