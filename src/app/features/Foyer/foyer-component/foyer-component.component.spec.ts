import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerComponentComponent } from './foyer-component.component';

describe('FoyerComponentComponent', () => {
  let component: FoyerComponentComponent;
  let fixture: ComponentFixture<FoyerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyerComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoyerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
