import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriyankaComponent } from './priyanka.component';

describe('PriyankaComponent', () => {
  let component: PriyankaComponent;
  let fixture: ComponentFixture<PriyankaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriyankaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriyankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
