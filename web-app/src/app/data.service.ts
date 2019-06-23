import { Injectable } from '@angular/core';
import { Observable, observable, Subject } from 'rxjs';
import { Petition, Signature } from './org.petiziochain';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map} from 'rxjs/operators';
import {randomBytes} from "crypto";
/*
import {getRandomString} from "selenium-webdriver/safari";
*/

@Injectable({
  providedIn: 'root'
})

/*
*The service that handles the calls to the rest_api
*/
export class DataService {

  restAPIURL:string = "http://ec2-52-201-249-133.compute-1.amazonaws.com:3000/api/";
  companies: Petition[];
  public ids: String[] = [];

  ngOnInit(){

  }

  constructor(private http: HttpClient) {

  }


  getPetitionersAPI(){

    return this.http.get<any>(this.restAPIURL + "Petitioner");
  }

  getVotersAPI(){

    return this.http.get<any>(this.restAPIURL + "Voter");
  }

  getPetitionsAPI(){

/*
    return this.http.get<any>("http://52.201.249.133:3000/api/Petition/");
*/

    return this.http.get<any>("http://my-json-server.typicode.com/srozov/petizio-ui/petitions/");
  }

  getPetitionAPI(id){

/*
     return this.http.get<JSON>("http://52.201.249.133:3000/api/Petition/"+id);
*/

    return this.http.get<any>("http://my-json-server.typicode.com/srozov/petizio-ui/petitions/"+id);


  }


  getAuditAPI(checksum, type){
    return this.http.get<JSON>(this.restAPIURL + "/api/v0/assets/signature/"+checksum+"&"+type);
  }

  giveSignatureAPI(checksum, signerPubKey){
    return this.http.get<JSON>(this.restAPIURL + "/api/v0/assets/acquire/"+checksum+"&"+signerPubKey);
  }

  getCertificateAPI(checksum){
    return this.http.get<JSON>(this.restAPIURL + "/api/v0/assets/certificate/"+checksum);
  }

  getPetitionRatingAPI(checksum){
    return this.http.get<JSON>(this.restAPIURL + "/api/v0/assets/rate/"+checksum);
  }
  ratePetitionAPI(checksum, mark, comment){
    console.log("in rate API");
    return this.http.post<JSON>(this.restAPIURL + "/api/v0/assets/rate",{checksum: checksum, mark:mark, description: comment})
    .subscribe(
      (data:any) => {
        console.log(data);
      }

    );
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  submitPetitionAPI(title, description1, description2, eID){
    return this.http.post<JSON>(this.restAPIURL + "CreatePetition",  {
      "$class": "org.petizio.com.CreatePetition",
      "petitionId": this.getRandomInt(0,25466572),
      "title": title,
      "descriptionShort": description1,
      "descriptionLong": description2,
      "ownerId": eID,
    })
      .subscribe(
        (data:any) => {
          console.log(data);
          return data;
        }

      );
  }




}
