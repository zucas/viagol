import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditTravelComponent } from './dialog-edit-travel.component';

describe('DialogEditTravelComponent', () => {
  let component: DialogEditTravelComponent;
  let fixture: ComponentFixture<DialogEditTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEditTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
