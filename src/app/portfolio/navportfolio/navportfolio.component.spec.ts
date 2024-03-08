import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavportfolioComponent } from './navportfolio.component';

describe('NavportfolioComponent', () => {
  let component: NavportfolioComponent;
  let fixture: ComponentFixture<NavportfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavportfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
