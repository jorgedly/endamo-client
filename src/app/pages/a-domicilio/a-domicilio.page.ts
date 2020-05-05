import { Component, OnInit } from '@angular/core';
import { FacturacionService } from 'src/app/services/facturacion.service';

@Component({
  selector: 'app-a-domicilio',
  templateUrl: './a-domicilio.page.html',
  styleUrls: ['./a-domicilio.page.scss'],
})
export class ADomicilioPage implements OnInit {

  cart = [];
  total: number = 0;
  email;
  id_usuario;
  misPedidos: any;
  constructor(public facturaService: FacturacionService) {
   }

  ngOnInit() {
    this.getId();
  }

  async getId() {
    this.email = localStorage.getItem('correo');
    this.email = this.email.substr(1, this.email.length - 2);
    const data = await this.facturaService.getIdUser(this.email);
    console.log(data);
    this.id_usuario = data[0].id_usuario;
    this.misEntregas(this.id_usuario);
    console.log(this.id_usuario);
  }

  async misEntregas(id){
  
    const data = await this.facturaService.mEnregas(id);
    console.log(data);
    this.misPedidos = data;
  }


}
