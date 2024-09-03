import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { StoreComponent } from './store/store.component';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    HomeComponent,
    ContactoComponent,
    StoreComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    IonicModule
  ]
})
export class PagesModule { }
