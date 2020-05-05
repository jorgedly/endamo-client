import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleProductoPage } from '../detalle-producto/detalle-producto.page';
import { Producto } from 'src/app/models/producto.model';
import { ConexionService } from 'src/app/services/conexion.service';
import { Router } from '@angular/router';
import { CartPage } from '../cart/cart.page';
import { CartserviceService } from 'src/app/services/cartservice.service';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.page.html',
  styleUrls: ['./home-cliente.page.scss'],
})
export class HomeClientePage implements OnInit {

  nombre: string = localStorage.getItem('nombre') || 'usuario';
  productos: Producto[] = [];
  searchTerm="";
  searchbartype="text";
  product_filter="Seleccione tipo de filtro";
  isOptionSelected=true;
  customPopoverOptions: any = {
    header: 'Filtro',
    subHeader: 'Seleccionar filtro',
    message: 'para filtrar los productos'
  };
   constructor(
    private conexion: ConexionService,
    private modalController: ModalController,
    private router:Router
  ) { }
  
  ngOnInit() {
    this.conexion.obtenerProductos();
    this.conexion.productos$.subscribe((productos: Producto[]) => {
      this.productos = productos;
    });
  }

  async ver(id: number) {
    const modal = await this.modalController.create({
      component: DetalleProductoPage,
      componentProps: {
        'producto': this.productos.find((producto)=>{
            return producto.id_producto===id;
        })
      }
    });
    return await modal.present();
  }

  logout(){
    localStorage.clear();
    this.router.navigate([`registro/2`]);
  }

  async viewCart() {
    const modal = await this.modalController.create({
      component: CartPage
    });
    return await modal.present();
  }

  select( event ) {
    this.isOptionSelected=false;
    this.searchTerm="";
    if(event.detail.value=="precio") this.searchbartype="number";
    else this.searchbartype="text";
    this.product_filter="Filtrar por "+event.detail.value;
  }

  search( event ) {//filtrar resultados de cursos matriculados (Pipe)
    if(this.product_filter=="precio"){
      this.searchTerm = event.detail.value;
    }
    else{
      this.searchTerm = event.detail.value;
    }
  }

  modificarPerfil(){
    console.log('hola mundo')
    this.router.navigate([`modificar-usuario`]);
  }

}
