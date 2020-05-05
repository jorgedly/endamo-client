import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Producto } from 'src/app/models/producto.model';
import { CartserviceService } from 'src/app/services/cartservice.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {

  resultado: string;
  producto: Producto;
  cantidad: number = 1;
  promo: number;
  promocion: any;
  constructor(private modalController: ModalController, private cartservice: CartserviceService, private toastController: ToastController) { }

  ngOnInit() {
    this.promo = this.producto.id_producto;
    this.cartservice.devolverPromocion(this.promo).then(
      result => {
        //make sure promiseA function allready success and response
        //do something here
        this.resultado = result["descripcion"];
        if (this.resultado.length > 5) {
          console.log(result["descripcion"]);
          this.resultado = "Este producto tiene una promocion la cual es " + result["descripcion"];
        }
      }).catch(err => console.log(err));
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async presentMessage(message_) {
    const toast = await this.toastController.create({
      message: message_,
      animated: true,
      color: 'primary',
      duration: 2000
    });
    toast.present();
  }

  addToCart() {
    let cart = [];
    if (this.cartservice.isNotEmpty()) cart = this.cartservice.getProducts();
    let i;
    if (undefined == (cart.find((value) => {
      if (value.producto.id_producto === this.producto.id_producto) {
        value.cantidad += this.cantidad;
        this.cantidad = value.cantidad;
        return value;
      }
    }))) {
      cart.push({ producto: this.producto, cantidad: this.cantidad });
    }
    this.cartservice.setProducts(cart);
    this.presentMessage(this.cantidad + " " + this.producto.nombre + " en el carrito");
    this.dismiss();
  }

}
