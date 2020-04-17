import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPivotalPageComponent } from './view-pivotal-page.component';

describe('ViewPivotalPageComponent', () => {
  let component: ViewPivotalPageComponent;
  let fixture: ComponentFixture<ViewPivotalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPivotalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPivotalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
