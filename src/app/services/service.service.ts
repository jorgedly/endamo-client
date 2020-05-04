import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private API_URL: string = 'https://endamo-api.herokuapp.com'
  private API_URL2: string = 'http://localhost:3000'

  correo;
  id;

  constructor(public http: HttpClient,
    private storageService: StorageService) { }

  //agregar metodos de verificacion de datos de registro y login
  verificarLogin(data) {
    return true;
  }

  login(data) {

    return new Promise(resolve => {
      this.http.post(`${this.API_URL}/login`, data)
        .subscribe(resp => {

          console.log(resp);

          if (resp["auth"]) {
            //si los datos son correctos, se guarda la informacion en el local storage
            localStorage.setItem('correo', JSON.stringify(data.email))
            console.log(data.email);
            console.log(localStorage.getItem('correo'));
            resolve(resp);
          }
          else {
            localStorage.clear();
            resolve(false);
          }
        });
    });

  }

  registro_cliente(data) {
    return new Promise(resolve => {
      this.http.post(`${this.API_URL}/register`, data)
        .subscribe(resp => {
          console.log(resp["success"]);

          if (resp["success"]) {
            //si los datos son correctos, se guarda la informacion en el local storage
            localStorage.setItem('correo', JSON.stringify(data.email))
            resolve(true);
          }
          else {
            localStorage.clear();
            resolve(false);
          }
        });
    });
  }

  registro_empresa(data) {
    return new Promise(resolve => {
      this.http.post(`${this.API_URL}/register`, data)
        .subscribe(resp => {
          console.log(resp);

          if (resp["success"]) {
            //si los datos son correctos, se guarda la informacion en el local storage
            localStorage.setItem('correo', JSON.stringify(data.email))
            resolve(true);
          }
          else {
            localStorage.clear();
            resolve(false);
          }
        });
    });
  }

  getId = () => {
    let promise = new Promise(resolve => {
      this.http.get(`${this.API_URL}/getidempresa/${this.storageService.getCorreo()}`)
        .subscribe(resp => {
          resolve(resp["idEmpresa"]);
        });
    });
    return promise;
  };

  addPostProducto = (data) => {
    return new Promise(resolve => {
      this.http.post(`${this.API_URL}/addProduct`, data)
        .subscribe(resp => {
          console.log(resp);
          resolve(resp);
        });
    });
  };

  addProduct = (name: string, price: number, amount: number) => {
    let promise = new Promise(resolve => {
      this.getId().then(id => {
        const data = { name, price, amount, id }
        console.log(data);
        this.addPostProducto(data).then(resp => {
          console.log(resp);
          resolve(resp);
        })

      })
    });
    return promise;
  }

  obtenerProductos() {
    return this.http.get(`${this.API_URL}/producto/listado`);
  }

  getDataUser(email) {
    const data = { email };
    return new Promise(resolve => {
      this.http.post(`${this.API_URL}/usuario/getData`, data)
        .subscribe(resp => {
          resolve(resp);
        });
    });
  }

  modificarPerfil(data) {
    return new Promise(resolve => {
      this.http.put(`${this.API_URL}/usuario/modificarUsuario`, data)
        .subscribe(resp => {
          resolve(resp);
        });
    });
  }

}


