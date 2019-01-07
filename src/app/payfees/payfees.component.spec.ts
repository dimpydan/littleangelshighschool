import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayfeesComponent } from './payfees.component';

describe('PayfeesComponent', () => {
  let component: PayfeesComponent;
  let fixture: ComponentFixture<PayfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
