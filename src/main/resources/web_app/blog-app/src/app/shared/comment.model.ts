import { Post } from './post.model';

export class Comment {
  public text: string;
  public author: string;
  public postRelatedTo: Post;

  constructor(text: string, author: string, postRelatedTo: Post) {
    this.text = text;
    this.author = author;
    this.postRelatedTo = postRelatedTo;
  }
}
