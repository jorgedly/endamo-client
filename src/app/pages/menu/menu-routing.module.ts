import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'lista_productos',
        loadChildren: () => import('../me-productos/me-productos.module').then( m => m.MeProductosPageModule)
      },
      {
        path: 'edit-enterprise',
        loadChildren: () => import('../edit-enterprise/edit-enterprise.module').then( m => m.EditEnterprisePageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'menu/lista_productos'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
