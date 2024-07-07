import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {LinkTag} from '../html-helper/ng-pat-html-helper.model';
import {NgPatHtmlHelperService} from '../html-helper/ng-pat-html-helper.service';

export interface ThemeConfig {
  name: string;
  cssClass: string;
  isDark: boolean;
  isDefault: boolean;
}

export function getDefaultThemeConfig(themes: ThemeConfig[]): ThemeConfig {
  return themes.find(theme => theme.isDefault) || themes[0];
}

export interface ThemeSwitcherServiceConfig {
  bodyTagClassesToKeep: string[];
  bodyTagClassesToRemove: string[];
  allThemeConfigs: ThemeConfig[];
}

export interface InitThemeSwitcherServiceConfig {
  links: LinkTag[];
  localStorageKey: string;
  defaultTheme?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NgPatThemeSwitcherService {
  private _localStorageKey = 'default-theme';

  themes: ThemeConfig[] = [];

  /**
   * The css class names of the body tag that should
   * not be removed when switching themes.
   *
   * For example, mat-typography should not be removed
   * when switching themes.
   * @private
   */
  private _bodyTagClassesToKeep: string[] = ['mat-typography'];

  set bodyTagClassesToKeep(classes: string[]) {
    this._bodyTagClassesToKeep = [...classes];
  }

  get bodyTagClassesToKeep(): string[] {
    return this._bodyTagClassesToKeep;
  }

  /**
   * The css class names of the body tag that should
   * be removed. This is used to remove the previous
   * theme's css class name from the body tag.
   * @private
   */
  private _bodyTagClassesToRemove: string[] = [];

  set bodyTagClassesToRemove(classes: string[]) {
    this._bodyTagClassesToRemove = [...classes];
  }

  get bodyTagClassesToRemove(): string[] {
    return this._bodyTagClassesToRemove;
  }

  private _allThemeConfigs: ThemeConfig[] = [];

  set allThemeConfigs(classes: ThemeConfig[]) {
    this._allThemeConfigs = [...classes];
  }

  get allThemeConfigs(): ThemeConfig[] {
    return this._allThemeConfigs;
  }

  get allThemeClasses(): string[] {
    return this.allThemeConfigs.map((c: ThemeConfig) => c.cssClass);
  }

  get defaultThemeConfig(): ThemeConfig {
    return getDefaultThemeConfig(this.allThemeConfigs);
  }

  currentThemeClass$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  currentThemeConfig$: BehaviorSubject<ThemeConfig | null> =
    new BehaviorSubject<ThemeConfig | null>(null);

  constructor(private htmlHelper: NgPatHtmlHelperService) {}

  setConfig(config: ThemeSwitcherServiceConfig): void {
    this.bodyTagClassesToKeep = config.bodyTagClassesToKeep;
    this.bodyTagClassesToRemove = config.bodyTagClassesToRemove;
    this.allThemeConfigs = config.allThemeConfigs;
  }

  /**
   *
   * @param config - the css class name of the theme to switch to
   */
  switchTheme(config: ThemeConfig | null | undefined): void {
    const _config = config ? config : this.defaultThemeConfig;

    const {cssClass, isDark} = _config;
    // save to local storage
    if (config) {
      this.currentThemeClass$.next(cssClass);
      this.currentThemeConfig$.next(_config);
      localStorage.setItem(this._localStorageKey, JSON.stringify(config));
    }

    if (cssClass && cssClass.length > 0 && this.bodyTagClassesToRemove.includes(cssClass)) {
      return;
    }

    /**
     * Exclude the body tag class names that should not be removed.
     * For example: `mat-typopgraphy` should not be removed when switching themes.
     */
    const classListToKeep: string[] = [];

    this.bodyTagClassesToKeep.forEach((c: string) => {
      if (this.htmlHelper.bodyCssContains(c)) {
        classListToKeep.push(c);
      }
    });

    if (cssClass) {
      this.htmlHelper.removeCssClassesFromBody([
        ...this.allThemeClasses,
        ...this.htmlHelper.bodyClassList(),
        ...this.bodyTagClassesToRemove
      ]);

      const cssClassesToAddtoBodyTag: string[] = [cssClass, ...classListToKeep];

      if (isDark) {
        cssClassesToAddtoBodyTag.push('mat-app-background');
      }

      /**
       * Add the theme name to the body tag
       */
      this.htmlHelper.bodyClassListAdd(cssClassesToAddtoBodyTag);
    }
  }

  switchThemeByCssClass(cssClass: string): void {
    const themeConfig = this.getThemeConfig(cssClass);
    this.switchTheme(themeConfig);
  }

  init(config: InitThemeSwitcherServiceConfig): void {
    if (config.localStorageKey) {
      this._localStorageKey = config.localStorageKey;

      const localStorageTheme = localStorage.getItem(config.localStorageKey);

      if (localStorageTheme) {
        try {
          const parsedConfig: ThemeConfig = JSON.parse(localStorageTheme);
          const themeConfig = this.getThemeConfig(parsedConfig.cssClass);

          if (themeConfig) {
            this.switchTheme(themeConfig);
          }
        } catch (e) {
          console.error('Error parsing theme from local storage', e);
        }
      } else {
        this.switchTheme(this.getThemeConfig(config.defaultTheme));
      }
    }

    this.htmlHelper.bodyClassListAdd(this.bodyTagClassesToKeep);

    if (config.links && config.links.length > 0) {
      this.htmlHelper.appendLinksToHead(config.links);
    }
  }

  getThemeConfig(cssClass: string | null | undefined): ThemeConfig | null {
    const config = this.allThemeConfigs.find((c: ThemeConfig) => c.cssClass === cssClass);
    return config ? config : this.defaultThemeConfig;
  }
}
