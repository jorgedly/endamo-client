import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  private todo: FormGroup;
  public modoDePago: Array<string>;
  public metodoDeEnvio: Array<string>;
  public currentPago: string;
  public currentEnvio: string;
  constructor(public alertController: AlertController) { }
  ngOnInit() {
    this.modoDePago = ["Pago En efectivo", "Pago con Tarjeta", "Tarjeta al Contado"];
    this.metodoDeEnvio = ["Glovo", "Hugo", "Uber Eats"];
    this.currentPago = "Pago En efectivo";
    this.currentEnvio = "Glovo";
    //this.todo = ;
  };
  
  logForm() {
    console.log(this.todo.value)
  }

  selectChangedModoPago(selectedPago) {
    if (selectedPago === 'Custom') {
      this.inputCustomColorValue()
    } else {
      this.currentPago = selectedPago;
    };
  };

  selectChangedMetodoDeEnvio(selectedEnvio) {
    if (selectedEnvio === 'Glovo') {
      this.inputCustomColorValue()
    } else {
      this.currentEnvio = selectedEnvio;
    };
  };

}
