import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewridestravelledbyyouComponent } from './viewridestravelledbyyou.component';

describe('ViewridestravelledbyyouComponent', () => {
  let component: ViewridestravelledbyyouComponent;
  let fixture: ComponentFixture<ViewridestravelledbyyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewridestravelledbyyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewridestravelledbyyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
