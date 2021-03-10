import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], filterString: string): Post[] {
    if(!filterString.trim()){
      return posts;
    }

    return posts.filter(post => post.title.includes(filterString));
  }

}
