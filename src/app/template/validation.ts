import { FormGroup } from "@angular/forms";
export class Validation {
    fieldForm: FormGroup
    isFieldInvalid(fieldName: string): boolean{
        const field = this.fieldForm.get(fieldName);
        return field?.invalid && field?.touched && field?.errors?.['required']||false;
      }
}
