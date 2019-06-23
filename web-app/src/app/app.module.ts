import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CreatePetitionPageComponent } from './create-petition-page/create-petition-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PetitionsPageComponent } from './petitions-page/petitions-page.component';
import { PetitionCardComponent } from './petition-card/petition-card.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { PetitionProfilePageComponent } from './petition-profile-page/petition-profile-page.component';
import { PetitionProfileHeaderComponent } from './petition-profile-header/petition-profile-header.component';
import { PetitionProfileSignComponent } from './petition-profile-sign/petition-profile-sign.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { UploadFileComponent } from './upload-file/upload-file.component'
import { FileSelectDirective, FileDropDirective, FileUploadModule } from 'ng2-file-upload';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { RatingModule } from 'ngx-rating';
import {TimeAgoPipe} from 'time-ago-pipe';
import { PdfViewerModule } from 'ng2-pdf-viewer';




@NgModule({
  declarations: [
    CreatePetitionPageComponent,
    AppComponent,
    HeaderComponent,
    PetitionsPageComponent,
    PetitionCardComponent,
    SearchboxComponent,
    PetitionProfilePageComponent,
    PetitionProfileHeaderComponent,
    PetitionProfileSignComponent,
    UploadFileComponent,
    StarRatingComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RatingModule,
    FileUploadModule,
    PdfViewerModule

  ],
  providers: [    
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
