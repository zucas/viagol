import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTravelsTableComponent } from './my-travels-table.component';

describe('MyTravelsTableComponent', () => {
  let component: MyTravelsTableComponent;
  let fixture: ComponentFixture<MyTravelsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTravelsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTravelsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
