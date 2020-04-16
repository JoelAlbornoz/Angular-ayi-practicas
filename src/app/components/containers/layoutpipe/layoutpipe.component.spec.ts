import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutpipeComponent } from './layoutpipe.component';

describe('LayoutpipeComponent', () => {
  let component: LayoutpipeComponent;
  let fixture: ComponentFixture<LayoutpipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutpipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
