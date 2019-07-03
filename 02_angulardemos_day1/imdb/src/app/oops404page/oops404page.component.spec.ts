import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Oops404pageComponent } from './oops404page.component';

describe('Oops404pageComponent', () => {
  let component: Oops404pageComponent;
  let fixture: ComponentFixture<Oops404pageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Oops404pageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Oops404pageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
