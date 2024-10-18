export default class CreatePostService {
  constructor(postRepository) {
    this.postRepository = postRepository;
  }

  async savePostToRepository(title, content) {
    const post = await this.postRepository.create(title, content);
    
    return post;
  }
}
