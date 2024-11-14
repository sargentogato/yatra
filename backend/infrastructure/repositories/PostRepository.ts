import database from '../config/firebaseConfig';
import { IPostRepository } from '../../domain/repositories/PostRepository';

export default class PostRepository implements IPostRepository {
  async create(title:string, content:string) {
    const docRef = await database
      .collection("post")
      .add({ title, content })

    const newDoc = await docRef;
    
    return newDoc.id
  }
}
