import { ThemeConfig } from "./services/theme-switcher/theme-switcher.model";


export interface EcThemeDict {
  DEFAULT: string;
  CLASS: string;
  STUDY_GROUP: string;
  BLUE: string;
  GREEN: string;
}

export const THEME_CONFIGS: ThemeConfig[] = [
  {name: 'Light', cssClass: 'default-light-theme', isDark: true, isDefault: true},
  {name: 'Dark', cssClass: 'default-dark-theme', isDark: true, isDefault: false},
];

const defaultTheme = THEME_CONFIGS.find(theme => theme.isDefault) || THEME_CONFIGS[0];

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
