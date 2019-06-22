import { Component, OnInit } from '@angular/core';
import { PetitionsPageComponent } from '../petitions-page/petitions-page.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'petizio-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})

/**
 * the component responsible for the searchbox in the top of the main/petitions page
 */
export class SearchboxComponent implements OnInit {

  listFilter: string = this._CompaniesPageComponent.listFilter;

  constructor(private _CompaniesPageComponent: PetitionsPageComponent) { }

  ngOnInit() {
  }

  /*
  Called on pressing enter while the cursor is in the searchbox
  calls setlistFilter in the CompaiesPageComponent

  input: search word entered in the field
  */
  onSubmit(f: NgForm) {
    this._CompaniesPageComponent.setlistFilter(f.value["srch-term"]);
  }

}
