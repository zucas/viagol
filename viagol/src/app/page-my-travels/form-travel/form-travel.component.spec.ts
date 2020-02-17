import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTravelComponent } from './form-travel.component';

describe('FormTravelComponent', () => {
  let component: FormTravelComponent;
  let fixture: ComponentFixture<FormTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
