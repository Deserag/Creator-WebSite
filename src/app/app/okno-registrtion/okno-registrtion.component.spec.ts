import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OknoRegistrtionComponent } from './okno-registrtion.component';

describe('OknoRegistrtionComponent', () => {
  let component: OknoRegistrtionComponent;
  let fixture: ComponentFixture<OknoRegistrtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OknoRegistrtionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OknoRegistrtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
