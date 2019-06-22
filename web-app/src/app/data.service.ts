import { Injectable } from '@angular/core';
import { Observable, observable, Subject } from 'rxjs';
import { Company, Audit } from './org.auditchain';
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
  companies: Company[];
  public ids: String[] = [];

  ngOnInit(){

  }

  constructor(private http: HttpClient) {

  }


  getCompaniesAPI(){
    return this.http.get<any>(this.restAPIURL + "/api/v0/assets/companies");
  }

  getCompanyAPI(id){
     return this.http.get<JSON>(this.restAPIURL + "/api/v0/assets/company/"+id);
  }

  getAuditsAPI(companyId){
    return this.http.get<JSON>(this.restAPIURL + "/api/v0/assets/audits/"+companyId);
  }

  getAuditAPI(checksum, type){
    return this.http.get<JSON>(this.restAPIURL + "/api/v0/assets/audit/"+checksum+"&"+type);
  }

  buyAuditAPI(checksum, supplierPubKey){
    return this.http.get<JSON>(this.restAPIURL + "/api/v0/assets/acquire/"+checksum+"&"+supplierPubKey);
  }

  getCertificatesAPI(companyId){
    return this.http.get<JSON>(this.restAPIURL + "/api/v0/assets/certificates/"+companyId);
  }
  getCertificateAPI(checksum){
    return this.http.get<JSON>(this.restAPIURL + "/api/v0/assets/certificate/"+checksum);
  }

  getAuditRatingAPI(checksum){
    return this.http.get<JSON>(this.restAPIURL + "/api/v0/assets/rate/"+checksum);
  }
  rateAuditAPI(checksum, mark, comment){
    console.log("in rate API");
    return this.http.post<JSON>(this.restAPIURL + "/api/v0/assets/rate",{checksum: checksum, mark:mark, description: comment})
    .subscribe(
      (data:any) => {
        console.log(data);
      }

    );
  }
}
