import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { marked } from 'marked';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-post.html',
  styleUrls: ['./blog-post.css']
})
export class BlogPost {

  htmlContent: string = '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.params['slug'] || 'first-blog-post';
    const url = `assets/posts/${slug}.md`;

    this.http.get(url, { responseType: 'text' }).subscribe({
      next: md => {
        this.htmlContent = marked.parse(md) as string;
        console.log(this.htmlContent);
      },
      error: err => {
        console.error('Failed to load post:', err);
        this.htmlContent = 'Post not found.';
      }
    });
  }
}

