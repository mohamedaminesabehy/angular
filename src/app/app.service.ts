import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categories } from './categories';
import { Observable } from 'rxjs';
import { Produit } from './produit';


@Injectable({
providedIn: 'root'
})
export class CategoriesService {
   

private categoriesURL = 'http://localhost:8088/api/v1/';
  apiEndpoint: any;

constructor(private http: HttpClient) { }

getCategories() {
return this.http.get<Categories[]>(this.categoriesURL + 'categorie');
}
addCategories(categories: Categories){
  return this.http.post<Categories>(`${this.categoriesURL}Categories`, categories)
}

deleteCategories(id: number) {
  return this.http.delete(`${this.categoriesURL}delete/${id}`);

}
 // Get User by Id - Read
 getCategoriesById(id: number): Observable<Categories>{
  return this.http.get<Categories>(`${this.categoriesURL}categorie/${id}`)
}

// Update User - Update
updateCategories(id?: number ,Categories?: any): Observable<any>{
  return this.http.put<any>(`${this.categoriesURL}Update/${id}`, Categories)
}

getProduitsByCategorieId(id: number): Observable<Produit[]> {
  const url = `${this.categoriesURL}categorieproduit/${id}`;
  return this.http.get<Produit[]>(url);
}
searchCategories(query: string) {
  const url = `${this.apiEndpoint}/search?q=${query}`;
  return this.http.get<any[]>(url);
}

///// Produit
getProduit() {

  return this.http.get<Produit[]>(this.categoriesURL + 'produit');
  }

  deleteProduit(id: number) {
    return this.http.delete(`${this.categoriesURL}Produit/${id}`);
  }
  addProduit(produit: Produit){
    return this.http.post<Produit>(`${this.categoriesURL}Produitadd`, produit)
  }
  updateProduit(id?: number ,Produit?: any): Observable<any>{
    return this.http.put<any>(`${this.categoriesURL}Updatep/${id}`, Produit)
  }
  getProduitById(id: number): Observable<Produit>{
    return this.http.get<Produit>(`${this.categoriesURL}produit/${id}`)
  }
  downloadExcel() {
    return this.http.get(`${this.categoriesURL}produits/download`, {responseType: 'blob'});
  }
  downloadPdf(): Observable<Blob> {
    return this.http.get(`${this.categoriesURL}downloadPDF`, { responseType: 'blob' });
  }
  search(query: string): Observable<Categories[]> {
    return this.http.get<Categories[]>(`${this.categoriesURL}search?q=${query}`);
  }
}



  
