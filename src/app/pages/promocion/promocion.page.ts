import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { PromocionService } from '../../services/promocion.service';
@Component({
  selector: 'app-promocion',
  templateUrl: './promocion.page.html',
  styleUrls: ['./promocion.page.scss'],
})
export class PromocionPage implements OnInit {

  id_empresa: any;
  id_promocion: any;
  promociones: any = [];

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

  addPromocion() {
    this.crud.addPromocion(1,2,this.id_promocion).then( resp => {
      console.log(resp);
      this.getPromocion();
    })
  }
  
}
