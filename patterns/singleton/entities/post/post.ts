export class Post {
  id: number;
  title: string;
  description: string;

  constructor({ id, title, description }) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}
