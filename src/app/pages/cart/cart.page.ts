import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { CartserviceService } from 'src/app/services/cartservice.service';
import { element } from 'protractor';
import { AlertController } from '@ionic/angular';
import { FacturacionService } from 'src/app/services/facturacion.service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart=[];
  total: number = 0;
  email;
  id_usuario;

  constructor(private modalController:ModalController,
    private cartservice:CartserviceService,
    private toastController:ToastController,
    public alertController: AlertController,
    public facturaService: FacturacionService) { 
      if(this.cartservice.isNotEmpty()){
        this.cart=this.cartservice.getProducts();
        
        console.log(this.cart);
        this.cart.forEach(elemento => {
          this.total = this.total+ elemento['producto'].precio*elemento.cantidad;
        });
      }
    }

  ngOnInit() {
    this.getId();
  }

  async getId(){
    this.email = localStorage.getItem('correo');
    this.email = this.email.substr(1,this.email.length-2);
    const data = await this.facturaService.getIdUser(this.email);
    console.log(data);
    this.id_usuario = data[0].id_usuario;
    console.log(this.id_usuario);
  }

  dismiss() {
    this.cart=[];
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  removeFromCart(product){
    let i:number;
    // this.cart.find((value,index) =>{
    //   if(value==product) {
    //     i=index;
    //   }
    // });
    this.cart.find((value,index) =>{
      if(value==product) {
        i=index;
        return true;
      }
    });
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

  comprar(){
    this.presentAlertConfirm();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirma tu compra',
      message: '<strong>Quieres realizar esta compra?</strong>',
      inputs: [
        {
          name: 'NIT',
          type: 'text',
          placeholder: 'Consumidor Final'
        },
        {
          name: 'Nombre',
          type: 'text',
          placeholder: 'Pedro Hernandez'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: data => {
          }
        }
      ]
    });

    await alert.present();
  }



}
