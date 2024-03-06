import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechboxComponent } from './techbox.component';

describe('TechboxComponent', () => {
  let component: TechboxComponent;
  let fixture: ComponentFixture<TechboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
