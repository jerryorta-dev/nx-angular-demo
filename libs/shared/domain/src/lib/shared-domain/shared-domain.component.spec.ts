import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SharedDomainComponent} from './shared-domain.component';

describe('SharedDomainComponent', () => {
  let component: SharedDomainComponent;
  let fixture: ComponentFixture<SharedDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedDomainComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SharedDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
