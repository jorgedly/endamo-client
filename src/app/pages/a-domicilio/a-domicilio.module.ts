import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ADomicilioPageRoutingModule } from './a-domicilio-routing.module';

import { ADomicilioPage } from './a-domicilio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ADomicilioPageRoutingModule
  ],
  declarations: [ADomicilioPage]
})
export class ADomicilioPageModule {}
