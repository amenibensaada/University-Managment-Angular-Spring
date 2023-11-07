import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteComponentComponent } from './universite-component.component';

describe('UniversiteComponentComponent', () => {
  let component: UniversiteComponentComponent;
  let fixture: ComponentFixture<UniversiteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversiteComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversiteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
