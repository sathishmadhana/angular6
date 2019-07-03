import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisionpageComponent } from './televisionpage.component';

describe('TelevisionpageComponent', () => {
  let component: TelevisionpageComponent;
  let fixture: ComponentFixture<TelevisionpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelevisionpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelevisionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
