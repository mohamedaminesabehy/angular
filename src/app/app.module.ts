import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddcategorieComponent } from './components/addcategorie/addcategorie.component';
import { ViewcategorieComponent } from './components/viewcategorie/viewcategorie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatecategorieComponent } from './components/updatecategorie/updatecategorie.component';
import { ViewproduitComponent } from './components/view-produit/view-produit.component';
import { AddproduitComponent } from './components/addproduit/addproduit.component';
import { UpdateproduitComponent } from './components/updateproduit/updateproduit.component';
import { CategorieproduitComponent } from './components/categorieproduit/categorieproduit.component';




@NgModule({
  declarations: [
    AppComponent,
    AddcategorieComponent,
    ViewcategorieComponent,
    UpdatecategorieComponent,
    ViewproduitComponent,
    AddproduitComponent,
    UpdateproduitComponent,
    CategorieproduitComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule ,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
