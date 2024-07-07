export interface NgPatDeviceState {
  isNativePlatform: boolean;
  ios: boolean;
  android: boolean;
  web: boolean;

  isPortrait: boolean;
  isLandscape: boolean;

  xSmall: boolean;
  small: boolean;
  medium: boolean;
  large: boolean;
  xLarge: boolean;
  handset: boolean;
  tablet: boolean;

  isLargeScreen: boolean;

  isLoaded: boolean;
  min640WidthPx: boolean;
}

export interface UiIosNotchCalc {
  toolbarHeightPx: number;
  paddingTopPx: number;
  contentTopPx: number;
}

export const min640WidthPx = '(min-width: 640px)';
