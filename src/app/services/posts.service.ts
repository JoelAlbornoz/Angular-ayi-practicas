import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../components/views/pipe-jueves/user';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http : HttpClient) { 

  }

  getPostsObserver():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1')
  }

}
