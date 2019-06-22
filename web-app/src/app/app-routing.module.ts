import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompaniesPageComponent} from './companies-page/companies-page.component';
import {CompanyProfilePageComponent} from './company-profile-page/company-profile-page.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

const routes: Routes = [
  { path: 'companies', component: CompaniesPageComponent},
  { path: 'company', component: CompanyProfilePageComponent},
  { path: 'company/:id', component: CompanyProfilePageComponent},
  { path: 'pdfviewer', component: PdfViewerComponent},
  { path: 'uploadAudit/:name/:id', component: UploadFileComponent},
  { path: '', redirectTo: '/companies', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
