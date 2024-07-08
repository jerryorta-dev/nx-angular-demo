import {CommonModule} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectChange, MatSelectModule} from '@angular/material/select';

import { THEME_CONFIGS, LinkTagRel, NgPatThemeSwitcherService, ThemeConfig } from '@nx-angular-demo/shared-domain';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {REVIEW_STATUS} from './dlc-storybook-review.models';

@Component({
  selector: 'dlc-storybook-review-container',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './dlc-storybook-review-container.component.html',
  styleUrl: './dlc-storybook-review-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'dlc-storybook-review-container',
    '[class.dlc-storybook-review-container__draft]': 'reviewStatus === reviewStatusEnum.DRAFT',
    '[class.dlc-storybook-review-container__prototype]':
      'reviewStatus === reviewStatusEnum.PROTOTYPE',
    '[class.dlc-storybook-review-container__final]': 'reviewStatus === reviewStatusEnum.FINAL',
    '[class.dlc-storybook-review-container__show-footer]': 'showFooter'
  }
})
export class DlcStorybookReviewContainerComponent implements OnInit, OnDestroy {
  private _onDestroy$ = new Subject<void>();

  themes: ThemeConfig[] = [...THEME_CONFIGS];

  @Input() figmaUrl: string | null = null;
  @Input() uxUrl: string | null = null;

  @Input() storybookFilePath: string | null = null;
  /**
   * Tracking id for component such as JIRA ticket number, Monday.com item id, etc.
   */
  @Input() trackingNumber: string | null = null;

  @Input() reviewStatus: REVIEW_STATUS = REVIEW_STATUS.DRAFT;

  @Input() showFooter = false;

  reviewStatusEnum = REVIEW_STATUS;

  themeFormControl = new FormControl();

  constructor(private themeSwitcherService: NgPatThemeSwitcherService) {
    this.themeSwitcherService.setConfig({
      bodyTagClassesToKeep: ['mat-typography'],
      bodyTagClassesToRemove: ['qk-default-theme', 'ed-default-theme'],
      allThemeConfigs: [...THEME_CONFIGS]
    });
  }

  ngOnInit() {
    this.themeSwitcherService.init({
      links: [
        {
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap',
          rel: LinkTagRel.STYLESHEET
        },
        {
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
          rel: LinkTagRel.STYLESHEET
        }
      ],
      localStorageKey: 'storybook-theme',
      defaultTheme: THEME_CONFIGS[0].cssClass
    });
    // set default theme

    this.themeSwitcherService.currentThemeClass$
      .pipe(takeUntil(this._onDestroy$))
      .subscribe((theme: string | null) => {
        if (theme) {
          this.themeFormControl.setValue(theme, {emitEvent: false});
        }
      });
  }

  onSelect(event: MatSelectChange) {
    this.themeSwitcherService.switchThemeByCssClass(event.value);
  }

  openFigma(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    if (this.figmaUrl) {
      window.open(this.figmaUrl, '_blank');
    }
  }

  openTracker(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    // window.open(`/${this.trackingNumber}`, '_blank');
  }

  openGithub(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    if (this.storybookFilePath) {
      window.open(
        `https://github.com/GiGaSoftwareDevelopment/gigasoftware/tree/main/${this.storybookFilePath}`,
        '_blank'
      );
    }
  }

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }
}
