import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringDetailsComponent } from './spring-details.component';

describe('SpringDetailsComponent', () => {
  let component: SpringDetailsComponent;
  let fixture: ComponentFixture<SpringDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
