import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesMartesComponent } from './observables-martes.component';

describe('ObservablesMartesComponent', () => {
  let component: ObservablesMartesComponent;
  let fixture: ComponentFixture<ObservablesMartesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablesMartesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablesMartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
