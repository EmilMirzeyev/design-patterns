import type { Comment } from "../../comment";
import type { ICommentRepository } from "../abstraction/i_comment_repository";

export class CommentRepository implements ICommentRepository {
  private _comments: Comment[] = [];

  public getComments(): Comment[] {
    return this._comments;
  }

  public addComment(comment: Comment): void {
    this._comments.push(comment);
  }

  public getCommentsForPost(postId: number): Comment[] {
    return this._comments.filter((comment) => comment.postId === postId);
  }
}
