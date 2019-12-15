import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintlistBoardComponent } from './sprintlist-board.component';

describe('SprintlistBoardComponent', () => {
  let component: SprintlistBoardComponent;
  let fixture: ComponentFixture<SprintlistBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintlistBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintlistBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
