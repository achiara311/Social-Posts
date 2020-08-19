import { Post } from './../interface/post';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() myPostRef: Post;
  @Output() deleted = new EventEmitter<void>();

  constructor() {}
  deletePost() {
    this.deleted.emit();
  }
  ngOnInit(): void {}
}
