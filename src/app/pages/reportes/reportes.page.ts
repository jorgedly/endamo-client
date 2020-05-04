import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ReporteService } from '../../reporte/reporte.service';
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {

  id_empresa: any;
  promociones: any = [];
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

  constructor(private crud: PromocionService,
    public toastController: ToastController,
    private router: Router) {
  }

  ngOnInit() {
    this.getPromocion();
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

  getPromocion(): any {
    this.crud.getPromocion().then(promo => {
      this.promociones = promo;
      console.log(this.promociones);
      console.log(promo);
    },
      err => {
        console.log(err);
        return false;
      });
  }

}
