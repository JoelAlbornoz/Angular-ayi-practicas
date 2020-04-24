import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-storage-viernes',
  templateUrl: './local-storage-viernes.component.html',
  styleUrls: ['./local-storage-viernes.component.scss']
})
export class LocalStorageViernesComponent implements OnInit {
  name=''
  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name')
  }


  saveLocalName(){
    localStorage.setItem('name', this.name)
  };

  deleteLocalName(){
    localStorage.removeItem('name')
    this.name = ''
  };


}
