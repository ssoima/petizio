import { Component, OnInit } from '@angular/core';
import {Petition} from '../org.petiziochain';
import {DataService} from '../data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'petizio-petitions-page',
  templateUrl: './petitions-page.component.html',
  styleUrls: ['./petitions-page.component.scss']
})

/*
The main/petitions page component
*/
export class PetitionsPageComponent implements OnInit {
 
  errorMessage: string;
  
  public listFilter: string;

  /*
    updates the list of petitions filtered by the searchbar
    calls performFilter () to perform the search

    input: search word
  */
  setlistFilter(value: string) {
      this.listFilter = value;
      this.filteredPetitions = this.listFilter ? this.performFilter(this.listFilter) : this.petitions;
  }

  filteredPetitions: Petition[];
  petitions: Petition[] = [];

  constructor(private _DataService: DataService) {

  }

  /*
  implements the functionality of the searchbar in the main page
  
  input: search word
  output: filtered petitions list
  */
  performFilter(filterBy: string): Petition[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.petitions.filter((petition: Petition) =>
      petition.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }


  /*
  initializing function.
  petitions are retrieved here
  */
  ngOnInit(): void {
   
    //retrieving all the petitions from rest_api then displaying them
    this._DataService.getPetitionsAPI().subscribe((petitionsList: any ) => {
      for (let petition of petitionsList){
          this.petitions.push(new Petition(petition.id, petition.name, petition.description1, petition.description2, petition.logo, petition.numberSignatures));
        }
        this.filteredPetitions = this.petitions;
    
    }
    );
  
  }
}
