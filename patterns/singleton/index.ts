import { Comment } from "./entities/comment/comment";
import { Post } from "./entities/post/post";
import { Singleton } from "./singleton";

export class SingletonApp {
  private singletonInstance = Singleton.instance;

  run() {
    this.setupPosts();
    this.setupComments();
    this.displayResults();
  }

  private setupPosts() {
    const post1 = new Post({
      id: 1,
      title: "First Post",
      description: "This is the first post.",
    });
    const post2 = new Post({
      id: 2,
      title: "Second Post",
      description: "This is the second post.",
    });

    this.singletonInstance.postRepository.addPost(post1);
    this.singletonInstance.postRepository.addPost(post2);
  }

  private setupComments() {
    const comment1 = new Comment({
      id: 1,
      postId: 1,
      content: "This is a comment for the first post.",
    });
    const comment2 = new Comment({
      id: 2,
      postId: 1,
      content: "Another comment for the first post.",
    });
    const comment3 = new Comment({
      id: 3,
      postId: 2,
      content: "Comment for the second post.",
    });

    this.singletonInstance.commentRepository.addComment(comment1);
    this.singletonInstance.commentRepository.addComment(comment2);
    this.singletonInstance.commentRepository.addComment(comment3);
  }

  private displayResults() {
    const allPosts = this.singletonInstance.postRepository.getPosts();
    console.log(allPosts);

    const commentsForPost1 =
      this.singletonInstance.commentRepository.getCommentsForPost(1);
    console.log("Comments for Post 1:", commentsForPost1);

    const commentsForPost2 =
      this.singletonInstance.commentRepository.getCommentsForPost(2);
    console.log("Comments for Post 2:", commentsForPost2);
  }
}
