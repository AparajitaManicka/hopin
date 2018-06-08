import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewridesofferedbyyouComponent } from './viewridesofferedbyyou.component';

describe('ViewridesofferedbyyouComponent', () => {
  let component: ViewridesofferedbyyouComponent;
  let fixture: ComponentFixture<ViewridesofferedbyyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewridesofferedbyyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewridesofferedbyyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
