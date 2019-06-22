import { Component, OnInit, Inject } from '@angular/core';
//import the ng2-file-upload directive so we can add it to our declarations.
import { FileUploader} from 'ng2-file-upload';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { MatDialogRef} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import { environment } from '../../environments/environment';


const auditUploudURL = "http://localhost:"+ environment.restAPIport +"/api/v0/assets/audit";
const certificateUploudURL = "http://localhost:"+ environment.restAPIport +"/api/v0/assets/certificate";

@Component({
  selector: 'auditchain-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})

/*
*the component responsible for uploading Audits and Certificates
*/

export class UploadFileComponent implements OnInit {
  public uploader:FileUploader;
  companyName: String;
  companyId: String;
  companyBCDBPubKey: string;
  fileType: String; //Audit or Certificate
  
  constructor(private _route: ActivatedRoute, public dialogRef: MatDialogRef<UploadFileComponent>,
    private _router: Router, private _DataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
    
    //declare a property called fileuploader and assign it to an instance of a new fileUploader.
    //pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
    //This is the default title property created by the angular cli. Its responsible for the app works 
    ngOnInit() {

      //retrieving company details
      this.companyName= this.data.companyName;
      this.companyId = this.data.companyId;
      this.fileType = this.data.fileType;
      this.companyBCDBPubKey = this.data.companyBCDBPubKey;
      console.log("username: "+environment.userName);
      console.log("companyname: "+this.companyName);
      if (this.fileType == 'Audit')
        this.uploader = new FileUploader({url: auditUploudURL, method: "POST", itemAlias: 'pdf',additionalParameter:{bigchainPublicKey:this.companyBCDBPubKey}});

      else if (this.fileType == 'Certificate'){
        var release = new Date();
        var expiry = new Date();
        expiry.setFullYear(release.getFullYear() + 1);
        this.uploader = new FileUploader({url: certificateUploudURL, method: "POST", itemAlias: 'pdf',additionalParameter:{release:release.toString(), expiry: expiry.toString(), companyId: this.companyId}});
      }
       //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
       this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
       //overide the onCompleteItem property of the uploader so we are 
       //able to deal with the server response.
       this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            console.log("PDFUpload:uploaded:", item, status, response);

            alert ("Document Uploaded Successfully");
        };
    }

}
