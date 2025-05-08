import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Place } from './place';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  apiUrl:string = environment.apiUrl + '/places';
  constructor(private http:HttpClient) {

   }
   save(place: Place): Observable<Place>{
    return this.http.post<Place>(this.apiUrl, place);
   }
   listAllPlaces(): Observable<Place[]>{
    return this.http.get<Place[]>(this.apiUrl);
   }
   filterPlaces(name:string, category:string, location:string): Observable<Place[]>{
    let par = new HttpParams()
    if(name){
     par = par.set('name_like', name)
    }
    if(category && category !== 'all'){
    par =  par.set('category', category)
    }
    if(location){
    par =  par.set('location_like', location)
    }
    return this.http.get<Place[]>(this.apiUrl,{
      params: par  
    });
   }
}
