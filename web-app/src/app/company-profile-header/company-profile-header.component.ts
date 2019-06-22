import { Component, OnInit, Input } from '@angular/core';
import { Company, Audit } from '../org.auditchain';

@Component({
  selector: 'auditchain-company-profile-header',
  templateUrl: './company-profile-header.component.html',
  styleUrls: ['./company-profile-header.component.scss']
})
export class CompanyProfileHeaderComponent implements OnInit {
  @Input() company: Company;
  constructor() { }

  ngOnInit() {

  }

}
