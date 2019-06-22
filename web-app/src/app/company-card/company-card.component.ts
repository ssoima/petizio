import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../org.auditchain';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'auditchain-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})

/*
The component for displaying individual company cards in the main page
*/
export class CompanyCardComponent implements OnInit {
  @Input() company: Company;
  constructor(private _route: ActivatedRoute,
    private _router: Router, private _DataService: DataService) { 
  }

  ngOnInit() {

  }

}
