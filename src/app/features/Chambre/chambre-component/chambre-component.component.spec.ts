import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreComponentComponent } from './chambre-component.component';

describe('ChambreComponentComponent', () => {
  let component: ChambreComponentComponent;
  let fixture: ComponentFixture<ChambreComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChambreComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChambreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
