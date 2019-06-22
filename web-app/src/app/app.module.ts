import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CompaniesPageComponent } from './companies-page/companies-page.component';
import { CompanyCardComponent } from './company-card/company-card.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { CompanyProfilePageComponent } from './company-profile-page/company-profile-page.component';
import { CompanyProfileHeaderComponent } from './company-profile-header/company-profile-header.component';
import { CompanyProfileAuditComponent } from './company-profile-audit/company-profile-audit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { DataService } from './data.service';
import { UploadFileComponent } from './upload-file/upload-file.component'
import { FileSelectDirective, FileDropDirective, FileUploadModule } from 'ng2-file-upload';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CompanyProfileCertificateComponent } from './company-profile-certificate/company-profile-certificate.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { RatingModule } from 'ngx-rating';
import {TimeAgoPipe} from 'time-ago-pipe';
import { PdfViewerModule } from 'ng2-pdf-viewer';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompaniesPageComponent,
    CompanyCardComponent,
    SearchboxComponent,
    CompanyProfilePageComponent,
    CompanyProfileHeaderComponent,
    CompanyProfileAuditComponent,
    PdfViewerComponent,
    UploadFileComponent,
    CompanyProfileCertificateComponent,
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
