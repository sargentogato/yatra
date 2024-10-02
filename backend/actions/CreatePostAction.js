import CreatePostService from "../domain/services/CreatePostService.js";

export default class CreatePostAction {
  constructor(postRepository) {
    this.postRepository = postRepository;
  }

  async execute(title, content) {
    const service = new CreatePostService(this.postRepository);

    return service.execute(title, content);
  }
}
