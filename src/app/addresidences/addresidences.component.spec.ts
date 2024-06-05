import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresidencesComponent } from './addresidences.component';

describe('AddresidencesComponent', () => {
  let component: AddresidencesComponent;
  let fixture: ComponentFixture<AddresidencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddresidencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddresidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
