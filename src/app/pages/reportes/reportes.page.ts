import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportesService } from '../../services/reportes.service';
import { StorageService } from '../../services/storage.service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {
  nuevo: string;
  id_empresa: any;
  reporteMV: any = [];
  reporteV: any = [];
  valor: any;
  /*promocion = [
    {
        "pelicula": "Batman v. Superman",
        "director": "Zack Snider",
        "anio": "2016"
    },
    {
        "pelicula": "La verdad duele",
        "director": "Will Smith",
        "anio": "2015"
    },
    {
        "pelicula": "Una historia real",
        "director": "Desconocido",
        "anio": "2014"
    }];*/

  constructor(private crud: ReportesService,
    public toastController: ToastController,
    private router: Router,
    private storageService: StorageService) {
  }

  ngOnInit() {
    console.log(this.storageService.getCorreo());
    this.getReporteTop3MasVendidos();
    this.getReporteTop3MenosVendidos();
  }

  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      color: 'danger',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  getReporteTop3MasVendidos(): any {
    this.crud.getReporteMas().then(reportemas => {
      this.reporteMV = reportemas;
      console.log("aqui iria +"+this.reporteMV);
      console.log(reportemas);
    },
      err => {
        console.log(err);
        return false;
      });
  }

  getReporteTop3MenosVendidos(): any {
    this.crud.getReporteMenos().then(reportemenos => {
      this.reporteV = reportemenos;
      console.log("aqui iria -"+ this.reporteV);
      console.log(reportemenos);
    },
      err => {
        console.log(err);
        return false;
      });
  }
}
