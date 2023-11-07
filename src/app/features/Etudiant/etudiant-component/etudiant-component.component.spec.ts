import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantComponentComponent } from './etudiant-component.component';

describe('EtudiantComponentComponent', () => {
  let component: EtudiantComponentComponent;
  let fixture: ComponentFixture<EtudiantComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
