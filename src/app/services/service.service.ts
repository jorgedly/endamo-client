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

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  rePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //correo,constrasena
  verificarLogin(data): boolean {
    console.log(data);
    if (data.email && data.password) {
      if (
        !(data.password.includes('select')) &&
        !(data.password.includes('script'))
        //this.rePassword.test(data.password) &&
        //this.reEmail.test(data.email)
      ) {
        return true;
      }
    }
    return false;
  }

  //nombre,email,username,password,avatar
  verificarRegistroUsuario(data): boolean {
    if (data.username && data.email && data.password) {
      if (
        !(data.password.includes('select')) &&
        !(data.password.includes('script')) &&
        !(data.email.includes('select')) &&
        !(data.email.includes('script')) &&
        this.rePassword.test(data.password) &&
        this.reEmail.test(data.email)
      ) {
        return true;
      }
    }
    return false;
  }

  //username,email,password
  verificarRegistroEmpresa(data): boolean {
    if (data.email && data.username && data.password) {
      if (
        !(data.password.includes('select')) &&
        !(data.password.includes('script')) &&
        !(data.email.includes('select')) &&
        !(data.email.includes('script')) &&
        this.rePassword.test(data.password) &&
        this.reEmail.test(data.email)
      ) {
        return true;
      }
    }
    return false;
  }

  login(data) {

    return new Promise(resolve => {
      this.http.post(`${this.API_URL}/login`, data)
        .subscribe(resp => {

          console.log(resp);

          if (resp["auth"]) {
            //si los datos son correctos, se guarda la informacion en el local storage
            localStorage.setItem('correo', JSON.stringify(data.email))
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
      this.http.post(`${this.API_URL}/usuario/register`, data)
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
      this.http.post(`${this.API_URL}/empresa/register`, data)
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


