import { IPostRepository } from "../repositories/PostRepository";

export default class CreatePostService {
  postRepository: IPostRepository;
  constructor(postRepository:IPostRepository) {
    this.postRepository = postRepository;
  }

  async savePostToRepository(title:string, content:string) {
    const post = await this.postRepository.create(title, content);
    
    return post;
  }
}
