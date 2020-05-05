import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from 'src/app/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  private API_URL: string = 'https://endamo-api.herokuapp.com'
  correo = '';
  productos;
  constructor(private http: HttpClient,
              private storageService: StorageService) { }
  
  getId = () => {
    console.log(this.storageService.getCorreo());
    let promise = new Promise(resolve => {
      this.http.get(`${this.API_URL}/getidempresa/${this.storageService.getCorreo()}`)
      .subscribe(resp => {
        resolve(resp);
      });
    });
    return promise;
  };

  getProductos = (empresa) => {
    let promise = new Promise(resolve => {
      this.http.get(`${this.API_URL}/listaProdutos/${empresa["id_empresa"]}`)
      .subscribe(resp => {
        resolve(resp);
      });
    });
    return promise;
  };

  // lista todos los productos
  listarProducto = () => {

    let promise = new Promise(resolve => {
      this.getId().then(idEmpresa =>{
        this.getProductos(idEmpresa).then(productos => {
          resolve(productos)
        })
      })      
    });
    return promise;
  }
  
  // elimina los productos
  deleteProducto(id: string){
    return this.http.delete(`${this.API_URL}/eliminar/${id}`);
  }

  // obtener un producto
  getProducto(id: string){
    return this.http.get(`${this.API_URL}/producto/${id}`)
  }

  // actualizar producto
  updateProducto(idProducto: number, name: string, price: number, amount: number){
    const data = {name, price, amount};
    return this.http.put(`${this.API_URL}/editar/producto/${idProducto}`,data);
  }

}
