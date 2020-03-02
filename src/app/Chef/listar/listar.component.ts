import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Chef } from 'src/app/Modelo/Chef';
import { ServiceChef } from '../service.service';

@Component({
  selector: 'app-listar', //etiqueta HTML
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  chefs:Chef[] //Creamos una variable

  constructor(private service:ServiceChef, private router:Router) { }

  ngOnInit() {
    this.service.obtenerChef().subscribe(data=>{
      this.chefs=data;
    //  console.log(this.chefs);
      
    })
  }

}
