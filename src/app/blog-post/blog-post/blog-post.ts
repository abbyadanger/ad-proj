import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { marked } from 'marked';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-post',
  template: `<div [innerHTML]="content"></div>`,
  styleUrl: './blog-post.css'
})
export class BlogPost implements OnInit {

  content: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    const filename = this.route.snapshot.paramMap.get('filename') || '';
    this.getContentFromPost(filename).subscribe(content => {
      this.content = marked.parse(content) as string;
    });
  }

  getContentFromPost(filename: string): Observable<string> {
    // Gets content from file and returns it as a string/text
    return this.http.get(`assets/posts/${filename}`, { responseType: 'text' });
  }
}
