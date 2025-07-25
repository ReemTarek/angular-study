import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',

  
})
export class PostsService {
  posts: any[] = [];
  constructor(private http: HttpClient) {
 //   this.fetchPosts();
  }
  //observable method to lazy load posts
  //this method returns an observable that can be subscribed to in the component
  fetchPosts() :Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
   
  }
}
