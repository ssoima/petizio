import { Component, OnInit, Sanitizer, Input } from '@angular/core';
import { Location } from '@angular/common'; 
import { Company } from '../org.auditchain';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../environments/environment'

@Component({
  selector: 'auditchain-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})

/*
The component Responsible for viewing the audit or the certificate
*/

export class PdfViewerComponent implements OnInit {
   @Input() company: Company;
   public sub: Observable<string>;
   public path : string;
   public type: string;
   public filename: string;
   trustedURL: any;
   /*
   the construcor builds the path to the pdf file
   */
  constructor(private _location: Location, private _route: ActivatedRoute, public sanitizer: DomSanitizer) { 
   
    //getting the file name
    this.sub = this._route.queryParamMap.pipe(map((params) => params.get('path')));
    this.sub.subscribe((val) => this.path = val);
    
    //getting the file type
    this.sub = this._route.queryParamMap.pipe(map((params) => params.get('type')));
    this.sub.subscribe((val) => this.type = val);

     //getting the file name
     this.sub = this._route.queryParamMap.pipe(map((params) => params.get('filename')));
     this.sub.subscribe((val) => this.filename = val);

     if (this.type == "Certificate"){
      this.path ="/pdfCertificate/" + this.filename;
     }

     if (this.type == "AcquiredAudit"){
      this.path = "/pdfAudit/acquired/" + this.filename;
     }

     if (this.type == "CreatedAudit"){
      this.path = "/pdfAudit/created/" + this.filename;
     }

    
    this.trustedURL = "http://localhost:" + environment.restAPIport + this.path;
  
  }


  ngOnInit() {
    document.getElementById('back-button').style.display = 'block';
  }

}
