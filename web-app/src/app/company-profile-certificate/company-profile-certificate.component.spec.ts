import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileCertificateComponent } from './company-profile-certificate.component';

describe('CompanyProfileCertificateComponent', () => {
  let component: CompanyProfileCertificateComponent;
  let fixture: ComponentFixture<CompanyProfileCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProfileCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProfileCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
