import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindshoebyidComponent } from './findshoebyid.component';

describe('FindshoebyidComponent', () => {
  let component: FindshoebyidComponent;
  let fixture: ComponentFixture<FindshoebyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindshoebyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindshoebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
