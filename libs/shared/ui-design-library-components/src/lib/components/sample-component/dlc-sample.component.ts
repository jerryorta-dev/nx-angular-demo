import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'dlc-sample-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dlc-sample.component.html',
  styleUrl: './dlc-sample.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'dlc-sample-component'
  }
})
export class DlcSampleComponent {}
