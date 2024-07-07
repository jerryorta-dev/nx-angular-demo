import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DlcStorybookReviewContainerComponent } from './dlc-storybook-review-container.component';

describe('StoryReviewComponent', () => {
    let component: DlcStorybookReviewContainerComponent;
    let fixture: ComponentFixture<DlcStorybookReviewContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DlcStorybookReviewContainerComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(DlcStorybookReviewContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
