import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardblogsComponent } from './cardblogs.component';

describe('CardblogsComponent', () => {
  let component: CardblogsComponent;
  let fixture: ComponentFixture<CardblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardblogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
