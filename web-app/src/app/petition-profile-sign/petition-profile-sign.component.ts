import { Component, OnInit, Input } from '@angular/core';
import { Petition, Signature } from '../org.petiziochain';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { MatDialog } from '@angular/material';
import { environment } from '../../environments/environment';


@Component({
  selector: 'petizio-petition-profile-sign',
  templateUrl: './petition-profile-sign.component.html',
  styleUrls: ['./petition-profile-sign.component.scss']
})

/*
The component responsible for showing the audits in the petition's profile page
*/ 
export class PetitionProfileSignComponent implements OnInit {
  @Input() signature: Signature;
  @Input() petition: Petition;
  rating: number;
  showComment: boolean;
  created : false;
  questionComment: string; //holds the vaule of the new comment
  public mark: number; //holds the value of the new mark/rating for the current signature
  comments: any[] = [];
  demoRating: any = {
    checksum: 265, 
    rating: 4, 
/*    comments: [
      {comment:"comment1", mark: 1},
      {comment:"comment2", mark: 2},
      {comment:"comment4", mark: 4}
    ]*/
  }
  
  constructor(private _router: Router, private _DataService: DataService, public dialog: MatDialog) {
    this.showComment = false;
  }

  /*
  The method mapped to the buy button on signature
  calls the giveSignatureAPI
  */
  giveSignature() {
    this._DataService.giveSignatureAPI(this.signature.checksum, this.signature.signerId).subscribe((data: JSON) => {
      if (data['dev_message'] == "Success"){
        alert("Sign Petition request Sent");
            }
      else
       alert("Problem occured, please try again");

    });
  }

  showCommentOnClick() {
    this.showComment = !this.showComment;
  }

  getIDDialog () {
    const dialogRef = this.dialog.open(UploadFileComponent, {
      width: '600px', data: {
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }


  /* 
  the method mapped to the view button on signature

  calls the getAuditAPI to retrieve the Signature's pdf

  output: redirects to the pdfviewr in case the call was successful

  */

  /*
  retrieves the Rating and the comments for an signature
  */


  ngOnInit() {
  }
}
