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

  getThumbnailsArray(){
    let result = []
    this.http.get('https://jsonplaceholder.typicode.com/albums/1/photos').subscribe((response:any)=>{
      response.forEach(element => {
        result.push(element.thumbnailUrl)
      });
    })
    return result
  }

}
