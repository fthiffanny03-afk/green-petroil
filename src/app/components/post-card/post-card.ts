import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-card',
  imports: [RouterLink],
  templateUrl: './post-card.html',
  styleUrl: './post-card.css',
})
export class PostCard {
  post = input.required<Post>();
}