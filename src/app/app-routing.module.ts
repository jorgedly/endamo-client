import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'slides', pathMatch: 'full' },
  {
    path: 'slides',
    loadChildren: () => import('./pages/slides/slides.module').then(m => m.SlidesPageModule)
  },
  {
    path: 'registro/:id',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'home-cliente',
    loadChildren: () => import('./pages/home-cliente/home-cliente.module').then(m => m.HomeClientePageModule)
  },
  {
    path: 'create-product',
    loadChildren: () => import('./pages/create-product/create-product.module').then(m => m.CreateProductPageModule)
  },
  {
    path: 'producto/editar/:id',
    loadChildren: () => import('./pages/create-product/create-product.module').then(m => m.CreateProductPageModule)
  },
  {
    path: 'cargamasiva',
    loadChildren: () => import('./pages/cargamasiva/cargamasiva.module').then(m => m.CargamasivaPageModule)
  },
  {
    path: 'modificar-usuario',
    loadChildren: () => import('./pages/modificar-usuario/modificar-usuario.module').then(m => m.ModificarUsuarioPageModule)
  },
  {
    path: 'menu2',
    loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuPageModule)
  },
  {
    path: 'producto/editar/:id',
    loadChildren: () => import('./pages/create-product/create-product.module').then(m => m.CreateProductPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutPageModule)
  },
  {
    path: 'report',
    pathMatch: 'full',
    loadChildren: () => import('./pages/reportes/reportes.module').then(m => m.ReportesPageModule)
  },
  {
    path: 'promo',
    pathMatch: 'full',
    loadChildren: () => import('./pages/promocion/promocion.module').then(m => m.PromocionPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
