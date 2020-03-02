import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Chef/listar/listar.component';
import { AddComponent } from './Chef/add/add.component';
import { EditComponent } from './Chef/edit/edit.component';
import { ChefComponent } from './chef/chef.component';
import { CocinaComponent } from './cocina/cocina.component';
import { ListcociComponent } from './Cocina/listcoci/listcoci.component';
import { AddcociComponent } from './Cocina/addcoci/addcoci.component';
import { EditcociComponent } from './Cocina/editcoci/editcoci.component';


const routes: Routes = [
  //Esto es Chef
  {path:'chef', component:ChefComponent},
  {path:'listar', component:ListarComponent},
  {path:'add', component:AddComponent},
  {path:'edit', component:EditComponent},
  //Esto de abajo es cocina
  {path:'cuisine',component:CocinaComponent}, //AQUI LLAMAMOS TODO EL HTML DE LA COCINA se llama cuisine
  {path:'listarcoci', component:ListcociComponent},
  {path:'addcoci', component:AddcociComponent},
  {path:'editcoci', component:EditcociComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
