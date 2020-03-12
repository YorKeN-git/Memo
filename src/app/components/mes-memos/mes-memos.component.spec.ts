import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesMemosComponent } from './mes-memos.component';

describe('MesMemosComponent', () => {
  let component: MesMemosComponent;
  let fixture: ComponentFixture<MesMemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesMemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesMemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
