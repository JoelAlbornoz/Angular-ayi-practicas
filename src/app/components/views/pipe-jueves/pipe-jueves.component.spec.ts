import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeJuevesComponent } from './pipe-jueves.component';

describe('PipeJuevesComponent', () => {
  let component: PipeJuevesComponent;
  let fixture: ComponentFixture<PipeJuevesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeJuevesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeJuevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
