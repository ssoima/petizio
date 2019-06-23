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
  petition: Petition = new Petition();
  certificates: Certificate[] = [];
  userName = environment.userName;
  petitioner = "";

  constructor(private _route: ActivatedRoute,
              private _router: Router, private _DataService: DataService, public dialog: MatDialog) {
    console.log(this._DataService.getPetitionersAPI());
  }


  submitPetition() {
    console.log(this.petition);
    this._DataService.submitPetitionAPI(this.petition.title, this.petition.description1,
      this.petition.description2, this.petitioner);
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
      this.petitioner = petitionersList[0]['personId'];  });



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
