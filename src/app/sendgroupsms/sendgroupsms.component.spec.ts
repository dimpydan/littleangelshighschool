import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendgroupsmsComponent } from './sendgroupsms.component';

describe('SendgroupsmsComponent', () => {
  let component: SendgroupsmsComponent;
  let fixture: ComponentFixture<SendgroupsmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendgroupsmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendgroupsmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
