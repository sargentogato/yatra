import { IPostRepository } from "../domain/repositories/PostRepository";
import CreatePostService from "../domain/services/CreatePostService";

export default class CreatePostAction {
  postRepository: IPostRepository;
  constructor(postRepository:IPostRepository) {
    this.postRepository = postRepository;
  }

  async handlePostCreation(title:string, content:string) {
    const service = new CreatePostService(this.postRepository);
    console.log("CreatePostAction:", title, content);
    
    /* Llamamos al método execute y le pasamos dos argumentos */
    const dataSave = await service.savePostToRepository(title, content)
    
    return dataSave
  }
}
