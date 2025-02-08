import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { CommonModule } from '@angular/common';
import { Essaie } from '../model/essaie.models';


@Component({
   selector: 'app-user-list',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './user-list.component.html',
   styleUrl: './user-list.component.scss'
  })

export class UserListComponent implements OnInit {
  data: any;
  posts: Essaie[] = [];

  constructor(private apiService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.apiService.getPosts().subscribe(response => {
      console.log(response);
      this.posts = response;
    });
  }

  createPost(): void {
    const newPost: Essaie = {
      title: 'ESsaie avec POST',
      body: 'Saidou'
    };
    
    this.apiService.createPost(newPost).subscribe(response => {
      console.log('POST: Post crée:', response);
    });
  }

  updatePost(): void {
    const postId = 1;
    const updatedPost: Essaie = {
      title: 'methode PUT',
      body: 'misa a jour donné existant.'
    };
    
    this.apiService.updatePost(postId, updatedPost).subscribe(response => {
      console.log('PUT: mis a jour donné existant:', response);
    });
  }

  deletePost(): void {
    const postId = 1; 
    
    this.apiService.deletePost(postId).subscribe(() => {
      console.log('DELETE: supression reussi');
    });
  }

  patchPost(): void {
    const postId = 1; 
    const partialPost: Partial<Essaie> = {
      title: 'methode PATCH'
    };
    
    this.apiService.patchPost(postId, partialPost).subscribe(response => {
      console.log('PATCH: Mise a jour partielle Reussi:', response);
    });
  }


}



