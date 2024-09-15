export default class CreatePostService {
  constructor(postRepository) {
    this.postRepository = postRepository;
  }

  async execute(title, content) {
    const post = this.postRepository.create(title, content);
    return post;
  }
}
