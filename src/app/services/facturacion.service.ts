import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {


  private API_URL: string = 'https://endamo-api.herokuapp.com'
  private API_URL2: string = 'http://localhost:3000'

  constructor(public http: HttpClient) { }

  getIdUser(email){
    const data = { email };
    return new Promise(resolve => {
      this.http.post(`${this.API_URL}/getId`, data)
        .subscribe(resp => {
          resolve(resp);
        });
    });
  }

  crearFactura(fecha,id_usuario,total, nit, nombre){
    const data = { fecha, id_usuario, total, nit, nombre };
    return new Promise(resolve => {
      this.http.post(`${this.API_URL}/crearFactura`, data)
        .subscribe(resp => {
          resolve(resp);
        });
    });
  }

  crearDetalleFactura(id_factura, id_producto, cantidad){
    const data = { id_factura, id_producto, cantidad };
    return new Promise(resolve => {
      this.http.post(`${this.API_URL}/crearDetalleFactura`, data)
        .subscribe(resp => {
          resolve(resp);
        });
    });
  }

  crearADomicilio(usuario_id_usuario, avenida, zona, numero_casa){
    const data = { avenida, zona, numero_casa, usuario_id_usuario }
    return new Promise(resolve => {
      this.http.post(`${this.API_URL}/enviar/domiciliio`, data)
      .subscribe(resp => {
        resolve(resp);
      });
    });
  }

}
