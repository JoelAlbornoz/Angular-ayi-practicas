import { Component, OnInit, Input, AfterContentChecked, ContentChild } from '@angular/core';

@Component({
  selector: 'app-punto',
  templateUrl: './punto.component.html',
  styleUrls: ['./punto.component.scss']
})
export class PuntoComponent implements OnInit {
  @Input() x: number;
  @Input() y: number;
  
  constructor() { 
    
  }

  ngOnInit(): void {
  }

 

}
