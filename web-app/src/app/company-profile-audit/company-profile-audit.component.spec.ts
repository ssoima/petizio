import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileAuditComponent } from './company-profile-audit.component';

describe('CompanyProfileAuditComponent', () => {
  let component: CompanyProfileAuditComponent;
  let fixture: ComponentFixture<CompanyProfileAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProfileAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProfileAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
