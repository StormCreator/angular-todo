import { Component } from '@angular/core';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  
  filterString: string = '';
  posts: Post[] = [
    
  ];

  
  public addPost(post: Post): void{
    if(post.text.trim() && post.title.trim()){
      this.posts.unshift(post);
    }
  }

  public removePost(postId: number): void{
    console.log(postId);
    this.posts = this.posts.filter(post => post.id != postId);
    console.log(this.posts);
  }

  public setFilterString(filterString: string): void{
    this.filterString = filterString;
  }

}

// export class AppComponent {
  
//   posts: Post[] = [
//     {title: 'some title', text: 'some text', id: 1},
//     {title: 'title', text: 'text', id: 2},
//   ]
  

//   public updatePosts(post: Post): void{
//     this.posts.unshift(post);
//   }

//   public removePost(id: number): void{
//     this.posts = this.posts.filter(post => post.id != id);
//   }
// }
