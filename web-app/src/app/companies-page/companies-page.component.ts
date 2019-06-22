import { Component, OnInit } from '@angular/core';
import {Company} from '../org.auditchain';
import {DataService} from '../data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'auditchain-companies-page',
  templateUrl: './companies-page.component.html',
  styleUrls: ['./companies-page.component.scss']
})

/*
The main/companies page component
*/
export class CompaniesPageComponent implements OnInit {
 
  errorMessage: string;
  
  public listFilter: string;

  /*
    updates the list of companies filtered by the searchbar
    calls performFilter () to perform the search

    input: search word
  */
  setlistFilter(value: string) {
      this.listFilter = value;
      this.filteredCompanies = this.listFilter ? this.performFilter(this.listFilter) : this.companies;
  }

  filteredCompanies: Company[];
  companies: Company[] = [];

  constructor(private _DataService: DataService) {

  }

  /*
  implements the functionality of the searchbar in the main page
  
  input: search word
  output: filtered companies list
  */
  performFilter(filterBy: string): Company[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.companies.filter((company: Company) =>
      company.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }


  /*
  initializing function.
  companies are retrieved here
  */
  ngOnInit(): void {
   
    //retrieving all the compaines from rest_api then displaying them
    this._DataService.getCompaniesAPI().subscribe((companiesList: any ) => {
      for (let company of companiesList){
          this.companies.push(new Company(company.id,company.name,company.description,company.logo, company.ownerPubKey, "don't care"));
        }
        this.filteredCompanies = this.companies;
    
    }
    );
  
  }
}
