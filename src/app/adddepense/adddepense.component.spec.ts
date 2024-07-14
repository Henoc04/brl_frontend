import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddepenseComponent } from './adddepense.component';

describe('AdddepenseComponent', () => {
  let component: AdddepenseComponent;
  let fixture: ComponentFixture<AdddepenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdddepenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdddepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
