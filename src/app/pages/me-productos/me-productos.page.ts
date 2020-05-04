import { Component, OnInit, HostBinding } from '@angular/core';
import { ProductoServiceService } from '../../services/producto-service.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-me-productos',
  templateUrl: './me-productos.page.html',
  styleUrls: ['./me-productos.page.scss'],
})
export class MeProductosPage implements OnInit {
  productos: any = [];

  constructor(private crud: ProductoServiceService,
              public toastController: ToastController,
              private router: Router) { }

  ngOnInit() {
    //this.getProductos();
  }

  ionViewWillEnter(){
    this.getProductos();
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

  getProductos() {
    this.crud.listarProducto().then(productos => {
      this.productos = productos;
      console.log(this.productos);
    });
  }

  deleteProducto(id: string) {

    this.crud.deleteProducto(id)
      .subscribe(
        res => {
          this.getProductos();
        },
        err => this.presentToast("Error al eliminar el producto")
      )
  }

  addProduct(){
    this.router.navigate(['/create-product']);
  }



}
