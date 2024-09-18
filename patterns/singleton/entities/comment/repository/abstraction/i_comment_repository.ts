import type { Comment } from "../../comment";

export interface ICommentRepository {
  getComments(): Comment[];
  addComment(comment: Comment): void;
  getCommentsForPost(postId: number): Comment[];
}
