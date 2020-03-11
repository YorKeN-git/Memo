import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalToolsComponent } from './vertical-tools.component';

describe('VerticalToolsComponent', () => {
  let component: VerticalToolsComponent;
  let fixture: ComponentFixture<VerticalToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
