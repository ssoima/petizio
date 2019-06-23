import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Petition } from '../org.petiziochain';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { MatDialog } from '@angular/material';
import { Certificate } from '../org.petiziochain';
import { environment } from '../../environments/environment';

@Component({
  selector: 'petizio-create-petition-page',
  templateUrl: './create-petition-page.component.html',
  styleUrls: ['./create-petition-page.component.scss', '../w3.scss']
})
export class CreatePetitionPageComponent implements OnInit {
  petition: Petition;
  certificates: Certificate[] = [];
  userName = environment.userName;
  petitionersList;
  votersList;

  constructor(private _route: ActivatedRoute,
              private _router: Router, private _DataService: DataService, public dialog: MatDialog) {
    console.log(this._DataService.getPetitionersAPI());
  }


  submitPetition(title, description1, description2, eID) {
    console.log(this.petition);
/*
    this._DataService.submitPetitionAPI(title, description1, description2, eID);
*/
  }


  ngOnInit() {

    //getting the id of the petition
    /*
        var param = this._route.snapshot.paramMap.get('id');
    */
    /*    if (param) {
          var id = param;
          this.getPetition(id);
        }*/

    this._DataService.getPetitionersAPI().subscribe((petitionersList: any) => {
      this.petitionersList = [];
      for (var i = 0; i < petitionersList.length; i++) {
        this.petitionersList.push(petitionersList[i]['personId']);
      }


      console.log(this.petitionersList);
    });
    this._DataService.getVotersAPI().subscribe((list: any) => {
      this.votersList = [];
      for (var i = 0; i < list.length; i++) {
        this.votersList.push(list[i]['personId']);
      }


      console.log(this.votersList);
    });


    /*
    retrieves the petition by the id
    retrieves all the audits and certificates for the found petition

    input: Petition's id
    */
    /*  getPetition(id: string) {
        this._DataService.getPetitionAPI(id).subscribe((data: JSON)=> {
          if (!data['error']){
          this.petition = new Petition(data['id'],data['name'],data['description1'],data['description2'],data['logo'], data['numberSignatures']);

          }
        });*/

    /*
      }
    */

  }
}
