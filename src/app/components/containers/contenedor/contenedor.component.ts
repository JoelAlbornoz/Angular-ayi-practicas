import { Component, OnInit, ContentChild } from '@angular/core';
import { PuntoComponent } from '../../views/punto/punto.component';
import { fromEvent, } from 'rxjs'
@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})


export class ContenedorComponent implements OnInit {
  @ContentChild(PuntoComponent) referencia: PuntoComponent;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterContentChecked(){
    console.log("Content View : x:" + this.referencia.x + " y: " + this.referencia.y)
  }

}
