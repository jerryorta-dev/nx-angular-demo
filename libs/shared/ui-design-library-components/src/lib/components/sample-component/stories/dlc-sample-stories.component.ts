import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  DlcStorybookReviewContainerComponent
} from '../../../stories/story-review/dlc-storybook-review-container.component';
import { REVIEW_STATUS } from '../../../stories/story-review/dlc-storybook-review.models';
import { DlcSampleComponent } from '../dlc-sample.component';

@Component({
  selector: 'dlc-dlc-sample-stories',
  standalone: true,
  imports: [CommonModule, DlcSampleComponent, DlcStorybookReviewContainerComponent],
  templateUrl: './dlc-sample-stories.component.html',
  styleUrl: './dlc-sample-stories.component.scss'
})
export class DlcSampleStoriesComponent {
  reviewStatus = REVIEW_STATUS.FINAL;
}
