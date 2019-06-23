import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePetitionPageComponent } from './create-petition-page/create-petition-page.component';
import {PetitionsPageComponent} from './petitions-page/petitions-page.component';
import {PetitionProfilePageComponent} from './petition-profile-page/petition-profile-page.component';

import { UploadFileComponent } from './upload-file/upload-file.component';

const routes: Routes = [
  { path: 'create-petition', component: CreatePetitionPageComponent},
  { path: 'petitions', component: PetitionsPageComponent},
  { path: 'petition', component: PetitionProfilePageComponent},
  { path: 'petition/:id', component: PetitionProfilePageComponent},
  { path: 'petition/:name/:id', component: UploadFileComponent},
  { path: '', redirectTo: '/petitions', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
