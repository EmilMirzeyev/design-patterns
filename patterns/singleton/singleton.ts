import { CommentRepository } from "./entities/comment/repository/implementation/comment_repository";
import { PostRepository } from "./entities/post/repository/implementation/post_repository";

export class Singleton {
  static #instance: Singleton;

  public postRepository: PostRepository;
  public commentRepository: CommentRepository;

  private constructor() {
    this.postRepository = new PostRepository();
    this.commentRepository = new CommentRepository();
  }

  public static get instance(): Singleton {
    if (!Singleton.#instance) {
      Singleton.#instance = new Singleton();
    }

    return Singleton.#instance;
  }
}
