import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopersComponent } from './topers.component';

describe('TopersComponent', () => {
  let component: TopersComponent;
  let fixture: ComponentFixture<TopersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
