import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { InfoSoleilComponent } from './pages/info-soleil/info-soleil.component';

const routes: Routes = [
  {path:"accueil", component:AccueilComponent},
  {path:"contacts", component:ContactsComponent},
  {path:"info-sun", component:InfoSoleilComponent},
  {path:"**", redirectTo:"accueil"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
