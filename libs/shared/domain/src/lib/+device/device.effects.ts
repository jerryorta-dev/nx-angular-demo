import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as DeviceActions from './device.actions';
import { ngPatInitDevice, ngPatLoadDevices } from './device.actions';
import { min640WidthPx } from './device.model';



@Injectable()
export class NgPatDeviceEffects implements OnInitEffects {


  initDevice$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ngPatInitDevice),
      map(() => {
        return DeviceActions.ngPatLoadDevices({
          device: {
            isLoaded: true,
            isNativePlatform: Capacitor.isNativePlatform(),
            web: Capacitor.getPlatform() === 'web',
            ios: Capacitor.getPlatform() === 'ios',
            android: Capacitor.getPlatform() === 'android'
          }
        });
      })
    );
  });

  breakpointObserver$ = createEffect(() => {
    return this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
        Breakpoints.Handset,
        Breakpoints.Tablet,
        Breakpoints.Web,
        Breakpoints.HandsetPortrait,
        Breakpoints.TabletPortrait,
        Breakpoints.WebPortrait,
        Breakpoints.HandsetLandscape,
        Breakpoints.TabletLandscape,
        Breakpoints.WebLandscape,
        min640WidthPx
      ]).pipe(map((state: BreakpointState) => {
        const isPortrait = state.breakpoints[Breakpoints.HandsetPortrait] ||
          state.breakpoints[Breakpoints.TabletPortrait] ||
          state.breakpoints[Breakpoints.WebPortrait];

        const isLargeScreen = state.breakpoints[Breakpoints.Medium] ||
          state.breakpoints[Breakpoints.Large] ||
          state.breakpoints[Breakpoints.XLarge];

        return ngPatLoadDevices({
          device: {
            isPortrait,
            isLandscape: !isPortrait,
            isLargeScreen,

            xSmall: state.breakpoints[Breakpoints.XSmall],
            small: state.breakpoints[Breakpoints.Small],
            medium: state.breakpoints[Breakpoints.Medium],
            large: state.breakpoints[Breakpoints.Large],
            xLarge: state.breakpoints[Breakpoints.XLarge],
            handset: state.breakpoints[Breakpoints.Handset],
            tablet: state.breakpoints[Breakpoints.Tablet],
            min640WidthPx: state.breakpoints[min640WidthPx]
          }
        })
      }))
  });

  constructor(
    private breakpointObserver: BreakpointObserver,
    private actions$: Actions) {


  }

  ngrxOnInitEffects(): Action {
    return ngPatInitDevice();
  }
}
