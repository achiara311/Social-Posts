import { Post } from './../interface/post';
import { NgForm } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Post>();

  constructor() {}

  submitPost(form: NgForm) {
    let newPost = {
      title: form.value.title,
      thought: form.value.thought,
    };
    this.submitted.emit(newPost);
    form.reset();
  }

  ngOnInit(): void {}
}
