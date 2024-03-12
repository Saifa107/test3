import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersuComponent } from './versu.component';

describe('VersuComponent', () => {
  let component: VersuComponent;
  let fixture: ComponentFixture<VersuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VersuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VersuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
