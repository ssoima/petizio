import { Component, OnInit, Input } from '@angular/core';
import { Petition } from '../org.petiziochain';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'petizio-petition-card',
  templateUrl: './petition-card.component.html',
  styleUrls: ['./petition-card.component.scss']
})

/*
The component for displaying individual petition cards in the main page
*/
export class PetitionCardComponent implements OnInit {
  @Input() petition: Petition;
  constructor(private _route: ActivatedRoute,
    private _router: Router, private _DataService: DataService) { 
  }

  ngOnInit() {

  }

}
