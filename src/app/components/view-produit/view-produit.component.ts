import { Component, OnInit , Inject } from '@angular/core';
import { Produit } from 'src/app/produit';
import { CategoriesService } from 'src/app/app.service';
import { Categories } from 'src/app/categories';
import { Router } from '@angular/router';
import * as saveAs from 'file-saver';



@Component({
selector: 'app-viewproduit',
templateUrl: './view-produit.component.html',
styleUrls: ['./view-produit.component.css']
})

export class ViewproduitComponent implements OnInit {
produits: Produit[];
categories: Categories[];
    


constructor(private CategoriesService : CategoriesService , private router: Router) {
this.produits = [];
this.categories = [];
}

ngOnInit() {
this.CategoriesService.getProduit().subscribe(produits => this.produits = produits);
this.CategoriesService.getCategories().subscribe(categories => this.categories = categories);

}
deleteProduit(id: number) {
    this.CategoriesService.deleteProduit(id).subscribe()
    this.ngOnInit();
    }
    downloadExcel() {
        this.CategoriesService.downloadExcel().subscribe(data => {
        saveAs(data, 'produits.xlsx');
        });

}
downloadPdf() {
    this.CategoriesService.downloadPdf().subscribe(data => {
      const blob = new Blob([data], { type: 'application/pdf' });
      saveAs(blob, 'produits.pdf');
    });
  }
  updateProduit(id: number){
    this.router.navigate(['produit', id]);
    }
    getCategorieNom(categorieid: number): string {
      const categorie = this.categories.find(c => c.id === categorieid);
      return categorie ? categorie.nom : '';
    }

}