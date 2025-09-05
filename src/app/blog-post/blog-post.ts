import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { marked } from 'marked';
import { Observable } from 'rxjs';
import { BlogService } from './blog-post.service';

@Component({
  selector: 'app-blog-post',
  template: `<div>TEST!</div>`,
})
export class BlogPost implements OnInit {

  content: string = '';

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
  ) {}

  ngOnInit() {
    const filename = this.route.snapshot.paramMap.get('filename') || '';
    this.blogService.getPost(filename).subscribe(content => {
      this.content = marked.parse(content) as string;
    });
    console.log('BlogPost component initialized with filename:', filename);
  }
}
