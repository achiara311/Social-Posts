import { Post } from './../interface/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  userPost: Post[] = [
    {
      title: 'Grand Circus',
      thought: 'Very neat place!',
    },
    {
      title: 'Ritual',
      thought: 'Well developed app',
    },
    {
      title: 'Scott',
      thought: 'Well developed app',
    },
  ];

  showForm: boolean = false;

  constructor() {}
  //HAVE THESE METHODS IN THE PARENT COMPONENT
  onSubmit(post: Post) {
    this.userPost.unshift(post);
    this.toggleForm();
  }
  onDelete(index: number) {
    this.userPost.splice(index, 1);
  }
  toggleForm() {
    this.showForm = !this.showForm;
    //whatever you are, flip it (on/off for button)
  }
  ngOnInit(): void {}
}
