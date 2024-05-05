import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstQuestionsComponent } from './first-questions.component';

describe('FirstQuestionsComponent', () => {
  let component: FirstQuestionsComponent;
  let fixture: ComponentFixture<FirstQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstQuestionsComponent]
    });
    fixture = TestBed.createComponent(FirstQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
