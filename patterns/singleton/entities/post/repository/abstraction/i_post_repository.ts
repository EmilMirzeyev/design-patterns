import { Post } from "../../post";

export interface IPostRepository {
  getPosts(): Post[];
  addPost(post: Post): void;
}
