import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chef } from 'src/app/Modelo/Chef';
import { ServiceChef } from '../service.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  chef:Chef=new Chef();
  constructor(private router:Router,private service:ServiceChef) { }

  ngOnInit() {
    this.chef.cuisine=[];
  }
  Guardar(){
    


    
    console.log(this.chef);
    
    this.service.crearChef(this.chef).subscribe(data=>{
     alert("metiste un nuevo chef");
    this.router.navigate(["listar"]);
    }

    )

  }



}
