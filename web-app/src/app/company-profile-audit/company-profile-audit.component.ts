import { Component, OnInit, Input } from '@angular/core';
import { Company, Audit } from '../org.auditchain';
import { DataService } from '../data.service';
import { Alert } from 'selenium-webdriver';
import { Router } from '@angular/router';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { MatDialog } from '@angular/material';
import { environment } from '../../environments/environment';


@Component({
  selector: 'auditchain-company-profile-audit',
  templateUrl: './company-profile-audit.component.html',
  styleUrls: ['./company-profile-audit.component.scss']
})

/*
The component responsible for showing the audits in the company's profile page
*/ 
export class CompanyProfileAuditComponent implements OnInit {
  @Input() audit: Audit;
  @Input() company: Company;
  auditPending: boolean;
  rating: number;
  showComment: boolean;
  questionComment: string; //holds the vaule of the new comment
  public mark: number; //holds the value of the new mark/rating for the current audit
  comments: any[] = [];
  demoRating: any = {
    checksum: 265, 
    rating: 4, 
    comments: [
      {comment:"comment1", mark: 1},
      {comment:"comment2", mark: 2},
      {comment:"comment4", mark: 4}
    ]
  }
  
  constructor(private _router: Router, private _DataService: DataService) {
    this.showComment = false;
    this.auditPending = false;
  }

  /*
  The method mapped to the buy button on audit
  calls the buyAuditAPI
  */
  buyAudit() {
    this._DataService.buyAuditAPI(this.audit.checksum, this.company.ownerPubKey).subscribe((data: JSON) => {
      if (data['dev_message'] == "Success"){
        this.auditPending = true;
        alert("Buy Audit Request Sent");
            }
      else
       alert("Problem occured, please try again");

    });
  }

  showCommentOnClick() {
    this.showComment = !this.showComment;
  }

  /* 
  the method mapped to the view button on audit

  calls the getAuditAPI to retrieve the Audit's pdf

  output: redirects to the pdfviewr in case the call was successful

  */

  viewAudit(){
    var AuditType;
    if (this.audit.acquired){
      if (this.audit.created) {
        AuditType = 'CreatedAudit';
      } else {
         AuditType = 'AcquiredAudit';
      }
    } else if (this.audit.created){
      AuditType = 'CreatedAudit';
    }
      console.log("role: " + environment.role);
    this._DataService.getAuditAPI(this.audit.checksum, AuditType).subscribe((data: JSON) => {
      if (!data['error']){
        if(data['auditPath']){
          console.log(data['auditPath']);
        this._router.navigate(["../pdfviewer"],{
          queryParams: {
            path: data['auditPath'], 
            type: AuditType,
            filename: data['checksum'] + ".pdf"
          }
        });
        }
      }
      else
        alert("Cannot Retrieve Audit");
    });

  }

  /*
  retrieves the Rating and the comments for an audit
  */

  getAuditRating(){
    this._DataService.getAuditRatingAPI(this.audit.checksum).subscribe((data: JSON) => {
      if(data['rating'] != null){
        this.rating = data['rating'];
      }
      if(data['comments'] != null){
        this.comments = data['comments']; 
      }
      else
        this.rating = 0;
    });
    if (this.rating == null || this.rating < 0)
        this.rating = 0;
  }

  ngOnInit() {
    this.getAuditRating();
  }
}
