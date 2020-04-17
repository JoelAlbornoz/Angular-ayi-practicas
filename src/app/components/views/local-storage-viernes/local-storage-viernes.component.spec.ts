import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalStorageViernesComponent } from './local-storage-viernes.component';

describe('LocalStorageViernesComponent', () => {
  let component: LocalStorageViernesComponent;
  let fixture: ComponentFixture<LocalStorageViernesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalStorageViernesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalStorageViernesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
