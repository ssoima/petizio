import { Component, OnInit, Input } from '@angular/core';
import {RatingModule} from "ngx-rating";
import { PetitionProfileSignComponent } from '../petition-profile-sign/petition-profile-sign.component';
import { DataService } from '../data.service';

@Component({
  selector: 'petizio-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})

/*
*The component responsible for showing the ratings as stars
*/
export class StarRatingComponent implements OnInit {
  @Input() starsCount: number;
  @Input() readonly: boolean;
  @Input() comment: string;
  @Input() auditChecksum: string;
  constructor(private _DataService: DataService) { }

  ngOnInit() {
  }

  /*
  called whenever a star is clicked to update the ratings
  calls the rateAuditAPI to update the rating for an signature
  */
  updateRating(){
    if (this.comment == null){
      alert("enter a comment first");
      return;
    }
    this._DataService.ratePetitionAPI(this.auditChecksum, this.starsCount, this.comment);
  }

}
