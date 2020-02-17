import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTravelComponent } from './dialog-travel.component';

describe('DialogTravelComponent', () => {
  let component: DialogTravelComponent;
  let fixture: ComponentFixture<DialogTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
