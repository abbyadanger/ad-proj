import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  imports: [CommonModule, MatTableModule, RouterLink],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.css'
})
export class BlogList {
  
  posts: Post[] = [
    { name: 'Digital Minimalism', slug:'first-blog-post', date: '12.29.24' },
    { name: 'Why am I a developer?', slug:'first-blog-post', date: '2.3.25' },
    { name: 'Productivity in a Remote World', slug:'first-blog-post', date: '7.17.25' },
    { name: 'Climbing & Coding ???', slug:'first-blog-post', date: '8.2.25' },
    { name: 'Being Creative', slug:'first-blog-post', date: '8.15.25' },
    { name: 'Living a Full Life', slug:'first-blog-post', date: '8.20.25' },
    { name: '26', slug:'first-blog-post', date: '9.5.25' },
  ];

  displayedColumns: string[] = ['name', 'date'];

}

export interface Post {
  name: string;
  slug: string;
  date: string;
}