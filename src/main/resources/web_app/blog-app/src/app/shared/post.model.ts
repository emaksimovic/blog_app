export class Post {
  public title: string;
  public description: string;
  public authorImagePath: string;
  public authorName: string;

  constructor(title: string, description: string, authorImagePath: string, authorName: string) {
    this.title = title;
    this.description = description;
    this.authorImagePath = authorImagePath;
    this.authorName = authorName;
  }
}
