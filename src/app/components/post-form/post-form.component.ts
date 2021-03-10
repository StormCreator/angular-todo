import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})

export class PostFormComponent implements OnInit, AfterViewInit {

  title: string = '';
  text: string = '';
  filterString: string = '';
  @ViewChild('inputTitle') titleInput!: ElementRef;
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  @Output() onFilter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit():void{
    this.titleInput.nativeElement.focus();
  } 

  public addPost():void{
    this.onAdd.emit({
      title: this.title,
      text: this.text,
      id: Math.random()
    });
    this.text = this.title = '';
  }

  public doFilter(event: KeyboardEvent){
    this.onFilter.emit(this.filterString);
  }
}



















// export class PostFormComponent implements OnInit, AfterViewInit {

//   title: string = '';
//   text: string = '';
//   @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
//   @ViewChild('inputTitle') titleInput!: ElementRef;

//   constructor() { }

//   ngOnInit(): void {

//   }

//   ngAfterViewInit():void{
//     this.titleInput.nativeElement.focus();
//   } 

//   addPost():void{
//     if(this.text.trim() && this.title.trim()){

//       this.onAdd.emit({
//         title: this.title,
//         text: this.text
//       });

//       this.title = this.text = '';
//     } 
//   }

// }
