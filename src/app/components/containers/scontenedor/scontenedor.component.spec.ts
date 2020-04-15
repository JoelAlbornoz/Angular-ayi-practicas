import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScontenedorComponent } from './scontenedor.component';

describe('ScontenedorComponent', () => {
  let component: ScontenedorComponent;
  let fixture: ComponentFixture<ScontenedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScontenedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScontenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
