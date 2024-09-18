import type { Post } from "../../post";
import type { IPostRepository } from "../abstraction/i_post_repository";

export class PostRepository implements IPostRepository {
  private _posts: Post[] = [];

  public getPosts(): Post[] {
    return this._posts;
  }

  public addPost(post: Post): void {
    this._posts.push(post);
  }
}
