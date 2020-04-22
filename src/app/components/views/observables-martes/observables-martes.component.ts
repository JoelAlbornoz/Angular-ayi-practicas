import { Component, OnInit } from '@angular/core';
import { interval, timer, combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-observables-martes',
  templateUrl: './observables-martes.component.html',
  styleUrls: ['./observables-martes.component.css']
})
export class ObservablesMartesComponent implements OnInit {
  letras  = ['a','b','c','d','e'];
  numeros = [1,2,3,4,5];

  letras$  = interval(1000).pipe(
    map( i => this.letras[i] ),
    take( this.letras.length )
  );

   numeros$ = timer(500,1000).pipe(
    map( i => this.numeros[i] ),
    take( this.numeros.length )
  );

 combinado$ = combineLatest<any>(this.letras$, this.numeros$).pipe(
    map((data)=> {return data[0] + data[1]})
  )

  ngOnInit(): void {
  }

}
