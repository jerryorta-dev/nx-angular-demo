export enum LinkTagRel {
  STYLESHEET = 'stylesheet',
  ICON = 'icon',
  PRECONNECT = 'preconnect',
  PRELOAD = 'preload',
  PREFETCH = 'prefetch',
  DNS_PREFETCH = 'dns-prefetch'
}

export interface LinkTag {
  rel: LinkTagRel;
  href: string;
}

export interface NgPatHtmlAttribute {
  name: string;
  value: string;
}

export interface NgPatHtml {
  tag: string;
  attributes: NgPatHtmlAttribute[];
}

export interface NgPatScript {
  scriptSrc: string;
  attributes: NgPatHtmlAttribute[];
}
