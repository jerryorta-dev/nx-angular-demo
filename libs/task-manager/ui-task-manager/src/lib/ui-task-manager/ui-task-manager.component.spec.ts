import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UiTaskManagerComponent} from './ui-task-manager.component';

describe('UiTaskManagerComponent', () => {
  let component: UiTaskManagerComponent;
  let fixture: ComponentFixture<UiTaskManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTaskManagerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UiTaskManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
