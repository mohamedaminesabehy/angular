import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategorieComponent } from './components/addcategorie/addcategorie.component';
import { AddproduitComponent } from './components/addproduit/addproduit.component';
import { CategorieproduitComponent } from './components/categorieproduit/categorieproduit.component';
import { UpdatecategorieComponent } from './components/updatecategorie/updatecategorie.component';
import { UpdateproduitComponent } from './components/updateproduit/updateproduit.component';
import { ViewproduitComponent } from './components/view-produit/view-produit.component';
import { ViewcategorieComponent } from './components/viewcategorie/viewcategorie.component';


const routes: Routes = [
  { path: '', component: ViewcategorieComponent },
  { path: 'produit', component: ViewproduitComponent },
  { path: 'update/:id', component: UpdatecategorieComponent },
  {path: 'add', component: AddproduitComponent },
  {path: 'addC', component: AddcategorieComponent },
  {path: 'produit/:id', component: UpdateproduitComponent },
  { path: 'categorieproduit/:id', component: CategorieproduitComponent }



  

  
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
