import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TaskManagerDomainComponent} from './task-manager-domain.component';

describe('TaskManagerDomainComponent', () => {
  let component: TaskManagerDomainComponent;
  let fixture: ComponentFixture<TaskManagerDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskManagerDomainComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskManagerDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
