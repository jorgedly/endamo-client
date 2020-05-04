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

  getId = () => {
    let promise = new Promise(resolve => {
      this.http.get(`${this.url}/getidempresa/${this.storageService.getCorreo()}`)
        .subscribe(resp => {
          resolve(resp["idEmpresa"]);
        });
    });
    return promise;
  };

  addPromocion = (ActivoNoActivo: number, id_empresa: number, id_producto: number) => {
    let promise = new Promise(resolve => {
      this.getId().then(id => {
        const data = { ActivoNoActivo, id_empresa, id_producto }
        console.log(data);
        this.addPostPromocion(data).then(resp => {
          console.log(resp);
          resolve(resp);
        })
      })
    });
    return promise;
  }
  
  addPostPromocion = (data) => {
    return new Promise(resolve => {
      this.http.post(`${this.url}/ingresarPromocion`, data)
        .subscribe(resp => {
          console.log(resp);
          resolve(resp);
        });
    });
  };

  deletePostPromocion = (data) => {
    return new Promise(resolve => {
      this.http.post(`${this.url}/ingresarPromocion`, data)
        .subscribe(resp => {
          console.log(resp);
          resolve(resp);
        });
    });
  }

  updateData(enterprise){
    return this.http.put(`${this.url}/empresa/update`,enterprise)
  }

}
