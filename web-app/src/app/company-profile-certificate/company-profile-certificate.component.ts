import { Component, OnInit, Input } from '@angular/core';
import { Company, Certificate } from '../org.auditchain';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'auditchain-company-profile-certificate',
  templateUrl: './company-profile-certificate.component.html',
  styleUrls: ['./company-profile-certificate.component.scss']
})
export class CompanyProfileCertificateComponent implements OnInit {

  @Input() certificate: Certificate;
  @Input() company: Company;
  
  constructor(private _router: Router, private _DataService: DataService) { }

  ngOnInit() {
  }

  /*
  the method mapped to the view button on the certificate
  
  calls the getCertificateAPI to retrieve the Certificate's pdf

  output: redirects to the pdfviewr in case the call was successful
  */
  viewCertificate(){
    this._DataService.getCertificateAPI(this.certificate.checksum).subscribe((data: JSON) => {
      if (!data['error']){
        if(data['certificatePath']){
        this._router.navigate(["../pdfviewer"],{
          queryParams: {
            path: data['certificatePath'],
            type: "Certificate",
            filename: data['checksum'] + ".pdf"
          }
        });
        }
      }
      else
        alert("Cannot Retrieve Certificate");
    });
  }

}
