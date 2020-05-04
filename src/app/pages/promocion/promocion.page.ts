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
  promocion: any = [];

  constructor(private crud: PromocionService,
    public toastController: ToastController,
    private router: Router) {
    this.getPromocion();
  }

  ngOnInit() {
  }
  /*
    ionViewWillEnter() {
      this.getProductos();
    }
  */
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
    this.crud.getPromocion().subscribe(promociones => {
      this.promocion = promociones;
    },
    err => {
      console.log(err);
      return false;
    });
  }
  /*
  getProductos() {
    this.crud.listarProducto().then(productos => {
      this.productos = productos;
    });
  }
/*
  deleteProducto(id: string) {

    this.crud.deleteProducto(id)
      .subscribe(
        res => {
          this.getProductos();
        },
        err => this.presentToast("Error al eliminar el producto")
      )
  }

  addProduct() {
    this.router.navigate(['/create-product']);
  }
  */
}
