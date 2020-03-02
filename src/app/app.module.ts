import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorld } from './miprimercomponente/primer.component';
import { ListarComponent } from './Chef/listar/listar.component';
import { AddComponent } from './Chef/add/add.component';
import { EditComponent } from './Chef/edit/edit.component';
import{FormsModule}from '@angular/forms';
import{ServiceService} from '../app/Service/service.service'
import{HttpClientModule} from '@angular/common/http';
import { CocinaComponent } from './cocina/cocina.component';
import { ChefComponent } from './chef/chef.component';
import { BarraComponent } from './barra/barra.component';
import { ListcociComponent } from './Cocina/listcoci/listcoci.component';
import { AddcociComponent } from './Cocina/addcoci/addcoci.component';
import { EditcociComponent } from './Cocina/editcoci/editcoci.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    ListarComponent,
    AddComponent,
    EditComponent,
    CocinaComponent,
    ChefComponent,
    BarraComponent,
    ListcociComponent,
    AddcociComponent,
    EditcociComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Esto es nuevo,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
