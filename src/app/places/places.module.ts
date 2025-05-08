import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ReactiveFormsModule} from '@angular/forms'
import { PlacesRoutingModule } from './places-routing.module';
import { PlacesComponent } from './places/places.component';


@NgModule({
  declarations: [
    PlacesComponent
  ],
  imports: [
    CommonModule,
    PlacesRoutingModule, 
    ReactiveFormsModule
  ]
})
export class PlacesModule { }
