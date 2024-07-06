import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import * as fromDevice from './device.reducer';
import {NgPatDeviceState, UiIosNotchCalc} from './device.model';
import { distinctUntilKeyChanged, filter, map } from 'rxjs/operators';
import { pipe } from 'rxjs';

export const selectNgPatDeviceState = createFeatureSelector<NgPatDeviceState>(
  fromDevice.ngPatDeviceFeatureKey
);

export const selectNgPatIsMobile = createSelector(
  selectNgPatDeviceState,
  (state: NgPatDeviceState) => {
    return state.isNativePlatform;
  }
);

export const ngPatIsMobile$ = pipe(
  select(selectNgPatDeviceState),
  distinctUntilKeyChanged('isLoaded'),
  filter((state: NgPatDeviceState) => state.isLoaded),
  map((state: NgPatDeviceState) => {
    return state.isNativePlatform;
  })
);

export const selectIsIOS = createSelector(
  selectNgPatDeviceState,
  (state: NgPatDeviceState): UiIosNotchCalc => {

    const buttonHeight = 28;
    const paddingTopBottom = 14;

    if (state.ios && state.isPortrait) {

      const targetHeight = 105;

      return {
        toolbarHeightPx: targetHeight,
        paddingTopPx: targetHeight - (buttonHeight + (paddingTopBottom * 2)),
        contentTopPx: 56 + targetHeight - (buttonHeight + (paddingTopBottom * 2)),
      };
    }

    return {
      toolbarHeightPx: 56,
      paddingTopPx: 0,
      contentTopPx: 56,
    }

  }
);
