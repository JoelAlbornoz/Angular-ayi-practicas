import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../services/posts.service'
import { Observable } from 'rxjs';
import { User } from './user';
@Component({
  selector: 'app-pipe-jueves',
  templateUrl: './pipe-jueves.component.html',
  styleUrls: ['./pipe-jueves.component.scss']
})
export class PipeJuevesComponent implements OnInit {
  posts:Observable<User>= new Observable(subscriber => {
    subscriber.next({id:1,title:'placeholder',body:'placeholder',userId:"1"});
  });
 

  constructor(private postsService: PostsService ) { 

    this.posts = postsService.getPostsObserver();
    postsService.getThumbnailsArray() 
  }

  ngOnInit(): void {
    
  }

}
