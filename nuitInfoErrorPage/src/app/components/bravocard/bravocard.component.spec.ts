import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BravocardComponent } from './bravocard.component';

describe('BravocardComponent', () => {
  let component: BravocardComponent;
  let fixture: ComponentFixture<BravocardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BravocardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BravocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
