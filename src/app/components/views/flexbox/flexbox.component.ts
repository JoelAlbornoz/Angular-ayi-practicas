import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.scss']
})
export class FlexboxComponent implements OnInit {
  listaImg = []
  limit = 4;
  constructor(private post:PostsService) { }

  ngOnInit(): void {
    this.listaImg = this.post.getThumbnailsArray()
  }

}
