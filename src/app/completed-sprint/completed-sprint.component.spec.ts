import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedSprintComponent } from './completed-sprint.component';

describe('CompletedSprintComponent', () => {
  let component: CompletedSprintComponent;
  let fixture: ComponentFixture<CompletedSprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedSprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
