import { Component } from '@angular/core';
import { collectionData, Firestore, collection } from '@angular/fire/firestore';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

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

  constructor(
  ) {}

  ngOnInit() {

  }

}
