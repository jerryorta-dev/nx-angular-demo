import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DlcSampleComponent} from './dlc-sample.component';

describe('DesignLibraryComponentsComponent', () => {
  let component: DlcSampleComponent;
  let fixture: ComponentFixture<DlcSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DlcSampleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DlcSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
