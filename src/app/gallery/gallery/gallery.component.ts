import { Component, OnInit } from '@angular/core';
import { Place } from '../../places/place';
import { Category } from '../../categories/category';
import { PlaceService } from '../../places/place.service';
import { CategoryService } from '../../categories/category.service';

@Component({
  selector: 'app-galery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  places: Place[] = [];
  categoriesFilter: Category[] = [];
  nameFilter: string = '';
  categoryFilter: string = '';
  locationFilter: string = '';
  constructor(
  private placeService:PlaceService,
  private categoryService: CategoryService ){}
  ngOnInit(): void {
    this.categoryService.listAllCat()
    .subscribe( cat => this.categoriesFilter = cat);
    this.placeService.listAllPlaces()
    .subscribe(p => this.places = p);
  }
  getTotalStars(place: Place): string {
    const rating = place.rating ?? 0;
    return '&#9733'.repeat(rating) + '&#9734'.repeat(5 - rating);
}
filter(){
this.placeService.filterPlaces(this.nameFilter, 
  this.categoryFilter, 
  this.locationFilter)
  .subscribe(result => this.places = result);
}
}
