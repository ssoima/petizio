import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Company, Audit } from '../org.auditchain';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { MatDialog } from '@angular/material';
import { Certificate } from '../org.auditchain';
import { environment } from '../../environments/environment';

@Component({
  selector: 'auditchain-company-profile-page',
  templateUrl: './company-profile-page.component.html',
  styleUrls: ['./company-profile-page.component.scss', '../w3.scss']
})
export class CompanyProfilePageComponent implements OnInit {
  company: Company;
  audits: Audit[] = [];
  certificates: Certificate[] = [];
  userName = environment.userName;

  constructor(private _route: ActivatedRoute,
    private _router: Router, private _DataService: DataService, public dialog: MatDialog) { 

  }


  ngOnInit() {
    //getting the id of the company
    var param = this._route.snapshot.paramMap.get('id');
    if (param) {
      var id = param;
      this.getCompany(id);
    }

  }

  /*
  retrieves the company by the id
  retrieves all the audits and certificates for the found company
  
  input: Company's id
  */
  getCompany(id: string) {
    this._DataService.getCompanyAPI(id).subscribe((data: JSON)=> {
      if (!data['error']){
      this.company = new Company(data['id'],data['name'],data['description'],data['logo'], data['ownerPubKey'], data['businessRelation']);
      
      // get all Audits for this company
      this.getAudits(this.company.ownerPubKey);

      //get all certificates for this company
      this.getCertificates(this.company.id);



      }
    });
  
  }

  //method responsible for uploading Audits and Certificates
  upload (type) {
    let dialogRef = this.dialog.open(UploadFileComponent, {
      width: '600px', data: {
        companyId: this.company.id, 
        companyName: this.company.name,
        companyBCDBPubKey: this.company.ownerPubKey,
        fileType: type
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }

  getAudits(ownerPubKey){
    this._DataService.getAuditsAPI(ownerPubKey).subscribe(
      (data: JSON)=> {
        if (!data['error']){
          var tempAuditList = data['audits'];
          for (let audit of tempAuditList){
            this.audits.push(new Audit(audit['checksum'],audit['name'],audit['release'],audit['checksum'], ownerPubKey, audit['acquired'], audit['created'], audit['hasBusinessRelation']));
          }
        }
      }
    );
  }

  getCertificates(companyId){
    this._DataService.getCertificatesAPI(companyId).subscribe(
      (data: JSON)=> {
        if (!data['error']){
        console.log(data['certificates']);
          for (let certificate of data['certificates']){
            var tempCertificate = new Certificate(certificate['name'],certificate['release'],certificate['checksum'], certificate['ipfsHash'], companyId);
            this.certificates.push(tempCertificate);
          }
        }
      } 
    );
  }
}
