import CreatePostService from "../domain/services/CreatePostService.js";

export default class CreatePostAction {
  constructor(postRepository) {
    this.postRepository = postRepository;
  }

  async handlePostCreation(title, content) {
    const service = new CreatePostService(this.postRepository);
    console.log("CreatePostAction:", title, content);
    
    /* Llamamos al método execute y le pasamos dos argumentos */
    return service.savePostToRepository(title, content);
  }
}
