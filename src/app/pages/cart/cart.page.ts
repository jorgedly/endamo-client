import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { CartserviceService } from 'src/app/services/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart=[];

  constructor(private modalController:ModalController,
    private cartservice:CartserviceService,
    private toastController:ToastController) { 
      if(this.cartservice.isNotEmpty())this.cart=this.cartservice.getProducts();
    }

  ngOnInit() {
  }

  dismiss() {
    this.cart=[];
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  removeFromCart(product){
    let i:number;
<<<<<<< HEAD
    // this.cart.find((value,index) =>{
    //   if(value==product) {
    //     i=index;
    //   }
    // });
=======
    this.cart.find((value,index) =>{
      if(value==product) {
        i=index;
        return true;
      }
    });
>>>>>>> origin/develop
    this.cart.splice(i,1);
    this.cartservice.setProducts(this.cart);
    this.presentMessage(product['producto'].nombre+" removido del carrito");
  }

  async presentMessage(message_) {
    const toast = await this.toastController.create({
      message: message_,
      animated: true,
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

}
