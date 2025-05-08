import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms"
import { Category } from '../../categories/category';
import { CategoryService } from '../../categories/category.service';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-places',
  standalone: false,
  templateUrl: './places.component.html',
  styleUrl: './places.component.scss'
})
export class PlacesComponent implements OnInit {
  fieldForm : FormGroup
  categories: Category[] = []

  constructor(
    private catService: CategoryService,
    private service: PlaceService

  ) {
    this.fieldForm = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      imageUrl: new FormControl('', [Validators.required, Validators.pattern(/(https?:\/\/.*\.(?:png|jpg|webp))/)]),
      location: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required)
    })
  }
  ngOnInit(): void {
    this.catService.listAllCat().subscribe({
      next: (listCategories)=> this.categories = listCategories
    })
    
  }
  save(){
    this.fieldForm.markAllAsTouched()
    if(this.fieldForm.valid){
    this.service.save(this.fieldForm.value).subscribe({
      next:(place) =>{
        console.log("Cadastrado com sucesso",place)
        this.fieldForm.reset()
      },
      error: (error) => {
        console.error("Desculpe, houve um erro",error)
      }
  })
}
}
isFieldInvalid(fieldName: string): boolean{
  const field = this.fieldForm.get(fieldName);
  return field?.invalid && field?.touched && (field?.errors?.['required'] || field?.errors?.['pattern']) || false;
}
}