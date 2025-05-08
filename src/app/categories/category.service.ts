import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Category } from './category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl:string = environment.apiUrl + '/categories';
  constructor(private http: HttpClient) { }
  save(category:Category): Observable<Category>{
    return this.http.post<Category>(this.apiUrl, category);
  }
  listAllCat(): Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrl);
  }
}
