import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindshoebycategoryComponent } from './findshoebycategory.component';

describe('FindshoebycategoryComponent', () => {
  let component: FindshoebycategoryComponent;
  let fixture: ComponentFixture<FindshoebycategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindshoebycategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindshoebycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
