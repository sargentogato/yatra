import CreatePostService from "../domain/services/CreatePostService.js";

export default class CreatePostAction {
  constructor(postRepository) {
    this.postRepository = postRepository;
  }

  async handlePostCreation(title, content) {
    const service = new CreatePostService(this.postRepository);
    console.log("CreatePostAction:", title, content);
    
    /* Llamamos al método execute y le pasamos dos argumentos */
    const dataSave = await service.savePostToRepository(title, content)
    
    return dataSave
  }
}
