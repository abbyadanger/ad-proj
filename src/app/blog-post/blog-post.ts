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
    private route: ActivatedRoute,
    private firestore: Firestore
  ) {}

  posts$!: Observable<any[]>;

  ngOnInit() {
    this.posts$ = this.getPosts();
    this.posts$.subscribe(posts => {
      console.log(posts);
    });
  }

  getPosts(): Observable<any> {
    const postsRef = collection(this.firestore, 'posts');
    return collectionData(postsRef, { idField: 'id' }) as Observable<any>;
  }

}
