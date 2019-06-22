import { Component, OnInit, Input } from '@angular/core';
import { Petition, Signature } from '../org.petiziochain';

@Component({
  selector: 'petizio-petition-profile-header',
  templateUrl: './petition-profile-header.component.html',
  styleUrls: ['./petition-profile-header.component.scss']
})
export class PetitionProfileHeaderComponent implements OnInit {
  @Input() petition: Petition;
  constructor() { }

  ngOnInit() {

  }

}
