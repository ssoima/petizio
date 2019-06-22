import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileHeaderComponent } from './company-profile-header.component';

describe('CompanyProfileHeaderComponent', () => {
  let component: CompanyProfileHeaderComponent;
  let fixture: ComponentFixture<CompanyProfileHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProfileHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProfileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
