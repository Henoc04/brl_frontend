import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeResidenceComponent } from './type-residence.component';

describe('TypeResidenceComponent', () => {
  let component: TypeResidenceComponent;
  let fixture: ComponentFixture<TypeResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeResidenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
