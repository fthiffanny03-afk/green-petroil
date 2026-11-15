import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PostService } from '../../services/post';
import { PostCard } from '../../components/post-card/post-card';

@Component({
  selector: 'app-home',
  imports: [PostCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private postService = inject(PostService);
  posts = toSignal(this.postService.getPosts(), { initialValue: [] });
}