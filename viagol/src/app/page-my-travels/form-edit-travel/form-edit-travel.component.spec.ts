import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditTravelComponent } from './form-edit-travel.component';

describe('FormEditTravelComponent', () => {
  let component: FormEditTravelComponent;
  let fixture: ComponentFixture<FormEditTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEditTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
