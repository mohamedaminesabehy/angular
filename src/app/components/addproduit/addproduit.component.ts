import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/app.service';
import { Categories } from 'src/app/categories';
import { Produit } from 'src/app/produit';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {
  categories!: Categories[] ;
  

  constructor(private service: CategoriesService, private router: Router) { }
  data: any

  form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    qt: new FormControl('', [Validators.required]),
    disponible:new FormControl('', [Validators.required]),
    datecreation: new FormControl('', [Validators.required]),
    datemodification: new FormControl('', [Validators.required]),
    categorieid: new FormControl('', [Validators.required])
  })
  ngOnInit(): void {
    this.service.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
  submit(){
    this.data = this.form.value
    console.log(this.data)
    this.service.addProduit(this.data).subscribe(data => {
      console.log(data)
      
      this.router.navigate(['/produit']);
    })
   
    this.ngOnInit();
  }
}