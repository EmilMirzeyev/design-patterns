export class Comment {
  id: number;
  postId: number;
  content: string;

  constructor({ id, postId, content }) {
    this.id = id;
    this.postId = postId;
    this.content = content;
  }
}
