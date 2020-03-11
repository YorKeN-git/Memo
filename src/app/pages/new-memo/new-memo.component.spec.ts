import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMemoComponent } from './new-memo.component';

describe('NewMemoComponent', () => {
  let component: NewMemoComponent;
  let fixture: ComponentFixture<NewMemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
