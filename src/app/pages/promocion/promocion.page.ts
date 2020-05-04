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
  /*
  addPromocion(id_promocion: number, ActivoNoActivo: number, id_empresa: number, id_producto: number) {
      this.crud.agregarPromocion(id_promocion, ActivoNoActivo, id_empresa, id_producto).subscribe()

      }
  }

  deletePromocion() {

  }
*/
}
