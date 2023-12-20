import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcnovSiteComponent } from './ocnov-site.component';

describe('OcnovSiteComponent', () => {
  let component: OcnovSiteComponent;
  let fixture: ComponentFixture<OcnovSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OcnovSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OcnovSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
