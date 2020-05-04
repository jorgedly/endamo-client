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

  getId = () => {
    let promise = new Promise(resolve => {
      this.http.get(`${this.url}/getidempresa/${this.storageService.getCorreo()}`)
        .subscribe(resp => {
          resolve(resp["id_empresa"]);
        });
    });
    return promise;
  };

  getReporteMas = () => {
    let promise = new Promise(resolve => {
      this.getId().then(idEmpresa => {
        const data = { idEmpresa };
        this.getReporteTopProductoMasVendido(data).then(resp => {
          resolve(resp);
        })
      });
    });
    return promise;
  }

  getReporteMenos = () => {
    let promise = new Promise(resolve => {
      this.getId().then(idEmpresa => {
        const data = { idEmpresa };
        console.log(data);
        this.getReporteTopProductoMenosVendido(data).then(resp => {
          resolve(resp);
        })
      })
    });
    return promise;
  }

  getReporteTopProductoMasVendido = (data) => {
    console.log("valor" + data.idEmpresa);
    let nueva = data.idEmpresa;
    let promise = new Promise(resolve => {
      this.http.get(`${this.url}/reporteTopProductoMasVendido/${nueva}`)
        .subscribe(resp => {
          resolve(resp);
        });
    });
    return promise;
  };

  getReporteTopProductoMenosVendido = (data) => {
    console.log("valor" + data.idEmpresa);
    let nueva = data.idEmpresa;
    let promise = new Promise(resolve => {
      this.http.get(`${this.url}/reporteTopProductoMenosVendido/${nueva}`)
        .subscribe(resp => {
          resolve(resp);
        });
    });
    return promise;
  };
}
