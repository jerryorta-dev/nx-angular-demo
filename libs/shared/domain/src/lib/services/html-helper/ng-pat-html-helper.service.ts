import {DOCUMENT} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {LinkTag, LinkTagRel, NgPatHtml, NgPatScript} from './ng-pat-html-helper.model';

@Injectable({
  providedIn: 'root'
})
export class NgPatHtmlHelperService {
  get body(): HTMLBodyElement {
    return this.document.getElementsByTagName('body')[0];
  }

  get head(): HTMLHeadElement {
    return this.document.getElementsByTagName('head')[0];
  }

  constructor(@Inject(DOCUMENT) private document: Document) {}

  bodyClassListAdd(cssClass: string | string[]): void {
    if (Array.isArray(cssClass)) {
      this.body.classList.add(...cssClass);
    } else {
      this.body.classList.add(cssClass);
    }
  }

  bodyClassList(): string[] {
    return Array.from(this.body.classList);
  }

  bodyCssContains(cssClass: string): boolean {
    return this.body.classList.contains(cssClass);
  }

  removeCssClassesFromBody(cssClass: string | string[]): void {
    if (Array.isArray(cssClass)) {
      this.body.classList.remove(...cssClass);
    } else {
      this.body.classList.remove(cssClass);
    }
  }

  appendLinksToHead(links: LinkTag | LinkTag[]): void {
    if (Array.isArray(links)) {
      links.forEach(link => {
        this.upsertLinkInHead(link.href, link.rel);
      });
    } else {
      this.upsertLinkInHead(links.href, links.rel);
    }
  }

  upsertLinkInHead(href: string, rel: LinkTagRel): void {
    const existingLink = this.head.querySelector(`link[href="${href}"]`);
    if (!existingLink) {
      const link = this.document.createElement('link');
      link.rel = rel;
      link.href = href;
      this.head.appendChild(link);
    }
  }

  removeLinkFromHead(href: string): void {
    const link = this.head.querySelector(`link[href="${href}"]`);
    if (link) {
      this.head.removeChild(link);
    }
  }

  upsertScriptInHead(scriptParams: NgPatScript, callback?: () => void): void {
    console.log('\n\n');
    console.log('UPSERTING SCRIPT IN HEAD');
    console.log('scriptParams: ', scriptParams);
    console.log('scriptParams.scriptSrc: ', scriptParams.scriptSrc);
    console.log('scriptParams.attributes: ', scriptParams.attributes);
    console.log('\n\n');

    const src = scriptParams.scriptSrc;

    const existingScript = this.head.querySelector(`script[src="${src}"]`);
    if (!existingScript) {
      const script = this.document.createElement('script');
      script.src = src;

      // add attributes
      scriptParams.attributes.forEach(attr => {
        script.setAttribute(attr.name, attr.value);
      });

      if (callback) {
        script.onload = callback;
      }

      this.head.appendChild(script);
    } else {
      if (callback) {
        callback();
      }
    }
  }

  appendChildWithHtml(element: HTMLElement, html: NgPatHtml): void {
    // create element
    const el = this.document.createElement(html.tag);
    // add atrributes
    html.attributes.forEach(attr => {
      el.setAttribute(attr.name, attr.value);
    });

    // append to element
    element.appendChild(el);
  }
}
