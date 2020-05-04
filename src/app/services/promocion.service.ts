import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from 'src/app/services/storage.service';
@Injectable({
  providedIn: 'root'
})
export class PromocionService {

  private url = 'https://endamo-api.herokuapp.com';

  constructor(private http: HttpClient,
    private storageService: StorageService) { }

  getPromocion = () => {
    let promise = new Promise(resolve => {
      this.http.get(`${this.url}/promocion`)
      .subscribe(resp => {
        resolve(resp);
      });
    });
    return promise;
  };

  updateData(enterprise){
    return this.http.put(`${this.url}/empresa/update`,enterprise)
  }

}
