import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { marked } from 'marked';
import { PLATFORM_ID, Inject } from '@angular/core';


@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './blog-post.html',
  styleUrl: './blog-post.css'
})
export class BlogPost {

  htmlContent: string | null = null;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    const renderMode = this.route.snapshot.data['renderMode'];
    if (renderMode === 'client' && isPlatformBrowser(this.platformId)) {
      this.http.get('assets/posts/first-blog-post.md', { responseType: 'text' })
        .subscribe({
          next: md => {
            this.htmlContent = marked.parse(md) as string;
            console.log('HTML content loaded:', this.htmlContent); // ✅ log it here

          },
          error: err => this.htmlContent = 'Post not found.'
        });
    }
  }

}
