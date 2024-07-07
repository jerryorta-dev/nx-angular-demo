import { ThemeConfig } from "./services/theme-switcher/theme-switcher.model";


export interface EcThemeDict {
  DEFAULT: string;
  CLASS: string;
  STUDY_GROUP: string;
  BLUE: string;
  GREEN: string;
}

export const EC_THEME_CONFIGS: ThemeConfig[] = [
  {name: 'EC Default', cssClass: 'ec-default-theme', isDark: true, isDefault: true},
  {name: 'EC Class', cssClass: 'ec-class-theme', isDark: true, isDefault: false},
  {name: 'EC Study Group', cssClass: 'ec-study-group-theme', isDark: true, isDefault: false},
  {name: 'EC Blue', cssClass: 'ec-blue-theme', isDark: true, isDefault: false},
  {name: 'EC Green', cssClass: 'ec-green-theme', isDark: true, isDefault: false},
  {name: 'EC Alert Theme', cssClass: 'ec-alert-theme', isDark: true, isDefault: false}
];

const defaultTheme = EC_THEME_CONFIGS.find(theme => theme.isDefault) || EC_THEME_CONFIGS[0];

/**
 *  Return 'ec-study-group-theme' from ThemeConfig[]
 * @param themes
 */
export function getStudyTheme(themes: ThemeConfig[]) {
  return themes.find((t: ThemeConfig) => t.cssClass === 'ec-study-group-theme') || defaultTheme;
}

/**
 *  Return 'ec-class-theme' from
 * @param themes
 */
export function getClassTheme(themes: ThemeConfig[]) {
  return themes.find((t: ThemeConfig) => t.cssClass === 'ec-class-theme') || defaultTheme;
}



/**
 *  Return 'ec-blue-theme' from
 * @param themes
 */
export function getBlueTheme(themes: ThemeConfig[]) {
  return themes.find((t: ThemeConfig) => t.cssClass === 'ec-blue-theme') || defaultTheme;
}

/**
 *  Return 'ec-green-theme' from
 * @param themes
 */
export function getGreenTheme(themes: ThemeConfig[]) {
  return themes.find((t: ThemeConfig) => t.cssClass === 'ec-green-theme') || defaultTheme;
}

export function getSelectedTheme(theme: string, themes: ThemeConfig[]) {
  return themes.find((t: ThemeConfig) => t.cssClass === theme);
}
