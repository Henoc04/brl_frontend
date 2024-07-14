import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetyperesidenceComponent } from './updatetyperesidence.component';

describe('UpdatetyperesidenceComponent', () => {
  let component: UpdatetyperesidenceComponent;
  let fixture: ComponentFixture<UpdatetyperesidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatetyperesidenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatetyperesidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
