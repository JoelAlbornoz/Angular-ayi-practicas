import { Component, OnInit } from '@angular/core';
import{fromEvent} from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  x=5;
  y=99;
  mouseClick$ = fromEvent<MouseEvent>(document, 'click');
  constructor() { }

  ngOnInit(): void {
    this.mouseClick$.subscribe((click) => {
      this.x = click.clientX;
      this.y = click.clientY;
    })
  }

}
