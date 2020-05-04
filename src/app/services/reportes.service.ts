import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from 'src/app/services/storage.service';
@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  private url = 'https://endamo-api.herokuapp.com';

  constructor(private http: HttpClient,
    private storageService: StorageService) { }

    getReporteTopProductoMasVendido = (id: string) => {
    let promise = new Promise(resolve => {
      this.http.get(`${this.url}/reporteTopProductoMasVendido/${id}`)
      .subscribe(resp => {
        resolve(resp);
      });
    });
    return promise;
  };
  getReporteTopProductoMenosVendido = (id: string) => {
    let promise = new Promise(resolve => {
      this.http.get(`${this.url}/reporteTopProductoMenosVendido/${id}`)
      .subscribe(resp => {
        resolve(resp);
      });
    });
    return promise;
  };

}
