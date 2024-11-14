export interface IPostRepository {
  create(title:string, content:string):Promise<string>
}