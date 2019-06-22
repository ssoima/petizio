import { Injectable } from '@angular/core';
import { Observable, observable, Subject } from 'rxjs';
import { Petition, Signature } from './org.petiziochain';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

/*
*The service that handles the calls to the rest_api
*/
export class DataService {

  restAPIURL:string = "http://127.0.0.1:"+ environment.restAPIport;
  companies: Petition[];
  public ids: String[] = [];

  ngOnInit(){

  }

  constructor(private http: HttpClient) {

  }


  getPetitionsAPI(){

/*
    return this.http.get<any>(this.restAPIURL + "/api/v0/assets/petitions");
*/

    return this.http.get<any>("http://my-json-server.typicode.com/srozov/petizio-ui/petitions/");
  }

  getPetitionAPI(id){
     return this.http.get<JSON>(this.restAPIURL + "/api/v0/assets/petition/"+id);
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
}
