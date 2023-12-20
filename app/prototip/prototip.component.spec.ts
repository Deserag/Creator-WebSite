import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototipComponent } from './prototip.component';

describe('PrototipComponent', () => {
  let component: PrototipComponent;
  let fixture: ComponentFixture<PrototipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrototipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrototipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
