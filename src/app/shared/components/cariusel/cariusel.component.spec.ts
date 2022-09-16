import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CariuselComponent } from './cariusel.component';

describe('CariuselComponent', () => {
  let component: CariuselComponent;
  let fixture: ComponentFixture<CariuselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CariuselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CariuselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
