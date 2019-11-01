import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolePrintComponent } from './console-print.component';

describe('ConsolePrintComponent', () => {
  let component: ConsolePrintComponent;
  let fixture: ComponentFixture<ConsolePrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolePrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
