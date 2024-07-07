import {TestBed} from '@angular/core/testing';

import {NgPatHtmlHelperService} from './ng-pat-html-helper.service';

describe('HtmlHelperService', () => {
  let service: NgPatHtmlHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgPatHtmlHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
