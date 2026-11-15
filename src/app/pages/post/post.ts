import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { PostService } from '../../services/post';

@Component({
  selector: 'app-post',
  imports: [RouterLink],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post {
  private route = inject(ActivatedRoute);
  private postService = inject(PostService);

  private id = this.route.snapshot.paramMap.get('id')!;
  post = toSignal(this.postService.getPost(this.id));
}
