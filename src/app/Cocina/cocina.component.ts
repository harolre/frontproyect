import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.scss']
})
export class CocinaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  Listarcoci(){
    this.router.navigate(["listarcoci"]);
  }
  Nuevococi(){
    this.router.navigate(["addcoci"]);
  }

}
