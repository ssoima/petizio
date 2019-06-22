import { Component } from '@angular/core';
import { Location } from '@angular/common'; 
import { environment } from '../environments/environment'

@Component({
  selector: 'auditchain-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './w3.scss']
})
export class AppComponent {
  title = 'auditchain';
  username = environment.userName.substr(0,2).toUpperCase();
  constructor(private _location: Location) { 
  }

  goBack(){
    this._location.back();
    document.getElementById('back-button').style.display = 'none';
  }
}
