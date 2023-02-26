import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/app.service';

@Component({
  selector: 'app-addcategorie',
  templateUrl: './addcategorie.component.html',
  styleUrls: ['./addcategorie.component.css']
})
export class AddcategorieComponent implements OnInit {
  show=false;
  constructor(private service: CategoriesService, private router: Router) { }
  data: any

  form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    qt: new FormControl('', [Validators.required]),
    datecreation: new FormControl('', [Validators.required]),
    datemodification: new FormControl('', [Validators.required])
  })
  ngOnInit(): void {
  }
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.addCategories(this.data).subscribe(data => {
      console.log(data)
      
      this.router.navigate(['']);
    })
    
    this.ngOnInit();
  }
 
}