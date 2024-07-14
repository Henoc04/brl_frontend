import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtyperesidenceComponent } from './addtyperesidence.component';

describe('AddtyperesidenceComponent', () => {
  let component: AddtyperesidenceComponent;
  let fixture: ComponentFixture<AddtyperesidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddtyperesidenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddtyperesidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
