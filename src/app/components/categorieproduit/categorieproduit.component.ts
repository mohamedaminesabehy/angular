import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/app.service';
import { Produit } from 'src/app/produit';

@Component({
  selector: 'app-categorieproduit',
  templateUrl: './categorieproduit.component.html',
  styleUrls: ['./categorieproduit.component.css']
})
export class CategorieproduitComponent {
  categorieid: number | undefined;
  produits: Produit[] | undefined;

  constructor(private route: ActivatedRoute, private appService: CategoriesService) { }
  

  ngOnInit(): void {
  
    const id = this.route.snapshot.paramMap.get('id');
if (id !== null) {
  this.categorieid = parseInt(id, 10);
  this.appService.getProduitsByCategorieId(this.categorieid).subscribe(data => {
    this.produits = data;
  });
}
  }
}
