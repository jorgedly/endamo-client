
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';
import { empty } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CartserviceService {

  private API_URL: string = 'https://endamo-api.herokuapp.com';

  correo;
  id;

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  //correo,constrasena
  verificarLogin(data): boolean {
    console.log(data);
    if (data.email && data.password) {
      if (!data) {
        return true;
      }
    }
    return false;
  }


  setProducts(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getProducts() {
    return JSON.parse(localStorage.getItem('cart'));
  }

  isNotEmpty() {
    if (localStorage.getItem('cart') != undefined) return true;
    return false;
  }

  flush() {
    localStorage.setItem('cart', JSON.stringify([]));
  }

  //nombre,email,username,password,avatar
  verificarRealizarADomicilio(idUsuario, pais, dep, casa): boolean {
    if (idUsuario != empty && pais != empty && dep != empty && casa != empty) {
      return true;
    }
    return false;
  }

  llenarRealizarTransaccion(NIT, nombre): boolean {
    if (NIT != 0 && nombre != empty) {
      return true;
    }
    return false;
  }

  addToCart(data) {
    console.log(data);
    let cart = [];
    let k;
    let i;
    if (data.producto != 0) {
      if (data.cantidad != 0) {
        for (i = 0; i < 10; i++) {
          cart.push({ producto: data.producto, cantidad: data.cantidad });
          this.setProducts(cart);
          k = i;
        }
      }
    }
    return k;
  }

  //esto es para verificar el de home 
  
  search(product_filter) {//filtrar resultados de cursos matriculados (Pipe)
    if(product_filter==="precio"){
      return "precio";
    }
    else{
      return "number";
    }
  }
}