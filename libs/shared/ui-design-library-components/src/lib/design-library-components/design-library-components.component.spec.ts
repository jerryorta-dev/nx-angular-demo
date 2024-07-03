import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DesignLibraryComponentsComponent} from './design-library-components.component';

describe('DesignLibraryComponentsComponent', () => {
  let component: DesignLibraryComponentsComponent;
  let fixture: ComponentFixture<DesignLibraryComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignLibraryComponentsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DesignLibraryComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
