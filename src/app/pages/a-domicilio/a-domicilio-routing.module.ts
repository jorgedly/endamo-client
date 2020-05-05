import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ADomicilioPage } from './a-domicilio.page';

const routes: Routes = [
  {
    path: '',
    component: ADomicilioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ADomicilioPageRoutingModule {}
