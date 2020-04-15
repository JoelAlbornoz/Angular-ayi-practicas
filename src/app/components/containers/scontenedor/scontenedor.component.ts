import { Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import { PuntoComponent } from '../../views/punto/punto.component';

@Component({
  selector: 'app-scontenedor',
  templateUrl: './scontenedor.component.html',
  styleUrls: ['./scontenedor.component.css']
})
export class ScontenedorComponent implements OnInit , AfterViewChecked{
  @ViewChild(PuntoComponent) referencia:PuntoComponent;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewChecked(){
    console.log("ViewChildren : x:" + this.referencia.x + " y: " + this.referencia.y)
  }

}
