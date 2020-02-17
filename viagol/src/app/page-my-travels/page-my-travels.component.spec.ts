import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMyTravelsComponent } from './page-my-travels.component';

describe('PageMyTravelsComponent', () => {
  let component: PageMyTravelsComponent;
  let fixture: ComponentFixture<PageMyTravelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMyTravelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMyTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
