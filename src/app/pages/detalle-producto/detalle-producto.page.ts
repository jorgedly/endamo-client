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

  producto: Producto;
  cantidad: number = 1;

  constructor(private modalController: ModalController, private cartservice:CartserviceService, private toastController:ToastController) { }

  ngOnInit() {
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

  addToCart(){
    let cart=[];
    if(this.cartservice.isNotEmpty()) cart = this.cartservice.getProducts();
    let i;
    if(undefined==(cart.find((value) =>{
      if(value.producto.id_producto===this.producto.id_producto) {
        value.cantidad+=this.cantidad;
        this.cantidad=value.cantidad;
        return value;
      }
    }))){
      cart.push({producto:this.producto,cantidad:this.cantidad});
    }
    this.cartservice.setProducts(cart);
    this.presentMessage(this.cantidad+" "+this.producto.nombre+" en el carrito");
    this.dismiss();
  }

}
