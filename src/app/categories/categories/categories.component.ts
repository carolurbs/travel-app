import { Component } from '@angular/core';
import{FormGroup, FormControl, Validators} from'@angular/forms';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  fieldForm: FormGroup;
  constructor(private categoryService: CategoryService) {
    this.fieldForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),

    });
  }
  save(){
    this.fieldForm.markAllAsTouched();
    if(this.fieldForm.valid){
      this.categoryService.save(this.fieldForm.value)
      .subscribe(cat => {
        console.log('Categoria sava com successo!', cat);
        this.fieldForm.reset();
      })
  }
}
  isFieldInvalid(fieldName: string): boolean{
    const field = this.fieldForm.get(fieldName);
    return field?.invalid && field?.touched && field?.errors?.['required'] ||false;
  }
}
