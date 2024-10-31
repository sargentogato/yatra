import CreatePostAction from "../CreatePostAction";
import { jest } from "@jest/globals";

describe("CreatePostAction", () => {
  let postRepository;
  let createPostAction;

  beforeEach(() => {
    postRepository = { create: jest.fn() };
  });

  test("should call CreatePostService with correct title and content", async () => {
    createPostAction = new CreatePostAction(postRepository);

    const result = await createPostAction.execute("title", "content");

    expect(postRepository.create).toHaveBeenCalledWith("title", "content");
  });
});
