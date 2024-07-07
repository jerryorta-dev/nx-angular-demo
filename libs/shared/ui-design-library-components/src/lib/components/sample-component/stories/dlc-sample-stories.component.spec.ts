import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DlcSampleStoriesComponent} from './dlc-sample-stories.component';

describe('DlcSampleStoriesComponent', () => {
  let component: DlcSampleStoriesComponent;
  let fixture: ComponentFixture<DlcSampleStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DlcSampleStoriesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DlcSampleStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
