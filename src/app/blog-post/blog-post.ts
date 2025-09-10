import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-post.html',
  styleUrls: ['./blog-post.css']
})
export class BlogPost {

  constructor(
  ) {}

}

