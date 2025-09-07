import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';  // ✅ import this

@Component({
  selector: 'app-blog-post',
  imports: [
    MarkdownModule,
  ],
  templateUrl: './blog-post.html',
  styleUrl: './blog-post.css'
})
export class BlogPost {
  file = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.file = `${slug}.md`; // e.g. "first-post.md"
    }
  }
}
