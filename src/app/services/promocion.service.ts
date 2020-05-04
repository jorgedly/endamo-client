import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromocionService {

  private url = 'https://endamo-api.herokuapp.com';

  constructor(private http: HttpClient) { }

  getPromocion(){
    return this.http.get(`${this.url}/promocion`);
  }

  updateData(enterprise){
    return this.http.put(`${this.url}/empresa/update`,enterprise)
  }

}
