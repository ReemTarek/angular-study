import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from '../postsService';
import { Post } from '../post';
@Component({
  selector: 'app-posts-view',
  imports: [CommonModule],
  templateUrl: './posts-view.html',
  styleUrl: './posts-view.css',
  standalone: true,
})
export class PostsView {
  postsData: Post[] = [];
constructor(private postsService: PostsService) {
  // Fetch posts when the component is initialized
  this.postsService.fetchPosts().subscribe(posts => {
    this.postsData = posts; // Store fetched posts in the service
  });
}
}
