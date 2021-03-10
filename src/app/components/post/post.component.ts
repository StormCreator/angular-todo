  import { Component, Input, Output, OnInit, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
  import { Post } from 'src/app/models/post';

  @Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
  })

  export class PostComponent implements OnInit {

    @Input() post: Post = {title: '', text: ''};
    @Output() onRemove = new EventEmitter<number>();

    public removePost(): void{
      this.onRemove.emit(this.post.id);
    }

    

    ngOnInit(): void {
    }

  }






  // export class PostComponent implements OnInit {

  //   @Input() post: Post = {title: '', text: ''};
  //   @Output() onRemove = new EventEmitter<number>();

  //   public removePost(): void{
  //     this.onRemove.emit(this.post.id);
  //   }

  //   ngOnInit(): void {
  //   }

  // }
