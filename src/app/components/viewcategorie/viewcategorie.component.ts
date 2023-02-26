import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/app.service';
import { Categories } from 'src/app/categories';
import { Router } from '@angular/router';


@Component({
selector: 'app-viewcategorie',
templateUrl: './viewcategorie.component.html',
styleUrls: ['./viewcategorie.component.css']
})

export class ViewcategorieComponent implements OnInit {
categories: Categories[];
searchTerm: string = '';


constructor(private categoriesService: CategoriesService, private router: Router) {
this.categories = [];

}

ngOnInit() {
this.categoriesService.getCategories().subscribe(categories => this.categories = categories);
this.categoriesService.getCategories().subscribe(data => this.categories = data);

}

deleteCategories(id: number) {
this.categoriesService.deleteCategories(id).subscribe()
this.ngOnInit();
}

updateCategorie(id: number){
this.router.navigate(['update', id]);
}

showProduits(id: number): void {
    this.router.navigate(['/categorieproduit', id]);
  }
  search(): void {
    this.categoriesService.search(this.searchTerm).subscribe((data: Categories[]) => {
      this.categories = data;
    });
  }

}