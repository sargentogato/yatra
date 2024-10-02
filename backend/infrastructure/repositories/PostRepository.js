export default class PostRepository {
  constructor(database) {
    this.database = database;
  }

  async create(title, content) {
    const docRef = await this.database
      .collection("post")
      .add({ title, content });

    const newDoc = await docRef.get();
    return newDoc.data();
  }
}
