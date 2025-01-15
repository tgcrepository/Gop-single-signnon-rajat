import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSignComponent } from './single-sign.component';

describe('SingleSignComponent', () => {
  let component: SingleSignComponent;
  let fixture: ComponentFixture<SingleSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
