import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { CartserviceService } from 'src/app/services/cartservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  [x: string]: any;
  cart = [];
  subtotal: any;

  constructor(private modalController: ModalController,
    private cartservice: CartserviceService,
    private router: Router, 
    private toastController: ToastController) {
    if (this.cartservice.isNotEmpty()) this.cart = this.cartservice.getProducts();
    this.subtotal = this.getSubtotal();
  }

  abrirSegundaPag() {

    this.router.navigate(["checkout",this]);
  }

  ngOnInit() {
  }

  dismiss() {
    this.cart = [];
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  makePurchase() {
    console.log("entro")
    this.route.navigate(['/checkout']);
  }

  getSubtotal(){
    console.log("valor"+this.cart.length);
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }


  async removeFromCart(product) {
    let i: number;
    // this.cart.find((value,index) =>{
    //   if(value==product) {
    //     i=index;
    //   }
    // });
    this.cart.splice(i, 1);
    this.cartservice.setProducts(this.cart);
    this.presentMessage(product['producto'].nombre + " removido del carrito");
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
