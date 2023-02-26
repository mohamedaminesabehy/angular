import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/app.service';
import { Produit } from 'src/app/produit';

@Component({
  selector: 'app-updateproduit',
  templateUrl: './updateproduit.component.html',
  styleUrls: ['./updateproduit.component.css']
})
export class UpdateproduitComponent {
  produit?: Produit
  data: any
  
  constructor(private service: CategoriesService, private route: ActivatedRoute, private router : Router) { }
  
  ngOnInit(): void {
  let id = this.route.snapshot.params['id'];
  this.service.getProduitById(id).subscribe(data => {
  this.produit = data
  console.log(this.produit)
  })
  }
  
  form = new FormGroup({
  nom: new FormControl('', [Validators.required]),
  qt: new FormControl('', [Validators.required]),
  disponible: new FormControl('', [Validators.required]),
  datecreation: new FormControl('', [Validators.required]),
  datemodification: new FormControl('', [Validators.required]),
  })
  
  submit(){
  this.data = this.form.value
  console.log(this.data)
  this.service.updateProduit( this.produit?.id,this.data).subscribe(data => {
    console.log(data)
  })
  
  this.router.navigate(['/produit']);
  }
  
  }

