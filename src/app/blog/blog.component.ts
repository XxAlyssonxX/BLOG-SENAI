import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../model/service/post.service';
import { Ipost } from '../../model/service/ipost';
import { HttpClientModule } from '@angular/common/http';
import { DataFormaPipe } from '../data-forma.pipe';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, HttpClientModule, DataFormaPipe],
  providers: [PostService],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  posts: Ipost[] = [];
  constructor(private postServices: PostService) { }

  ngOnInit(): void {
    this.postServices.getPosts().subscribe((post) => {
      this.posts = post;
    });
  }
}
