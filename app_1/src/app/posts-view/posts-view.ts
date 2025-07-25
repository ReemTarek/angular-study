import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from '../postsService';
import { Post } from '../post';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-posts-view',
  imports: [CommonModule],
  templateUrl: './posts-view.html',
  styleUrl: './posts-view.css',
  standalone: true,
})
export class PostsView {
  postsData: Post[] = [];
  cancellRequest!: Subscription
constructor(private postsService: PostsService) {
  // Fetch posts when the component is initialized
  // this.postsService.fetchPosts().subscribe(posts => {
  //   this.postsData = posts; // Store fetched posts in the service
  // });

}
ngOnInit() {
  // You can also fetch posts here if needed
this.getPosts();
}
getPosts() {
  // This method can be used to fetch posts if needed
  this.cancellRequest =this.postsService.fetchPosts().subscribe(posts => {
    this.postsData = posts;
  });
}
ngOnDestroy() {
this.unsubscribe();
}
unsubscribe() {
  // This method can be used to unsubscribe from any subscriptions if needed
  // For example, if you had a subscription to this.postsService.fetchPosts()
   this.cancellRequest.unsubscribe(); 
   console.log('Unsubscribed from posts service');
}
}