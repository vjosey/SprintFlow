import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintRetroComponent } from './sprint-retro.component';

describe('SprintRetroComponent', () => {
  let component: SprintRetroComponent;
  let fixture: ComponentFixture<SprintRetroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintRetroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintRetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
