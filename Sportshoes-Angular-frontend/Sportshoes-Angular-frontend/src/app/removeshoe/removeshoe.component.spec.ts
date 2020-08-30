import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveshoeComponent } from './removeshoe.component';

describe('RemoveshoeComponent', () => {
  let component: RemoveshoeComponent;
  let fixture: ComponentFixture<RemoveshoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveshoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveshoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
