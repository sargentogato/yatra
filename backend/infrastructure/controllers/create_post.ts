import PostRepository from "../repositories/PostRepository";
import CreatePostAction from "../../actions/CreatePostAction";

/* Es la solución que he encontrado para los parámetros req y res había creado un interfas para el Request */
import { Request, Response } from 'express';

// interface Request {
//   title:string,
//   content:string
// }

export default async function createPost(req:Request, res:Response) {
  console.log("Recibida solicitud POST en /create");
  console.log("Cuerpo de la solicitud:", req.body);
  /* 
    Aquí tengo que controlar las excepciones 
  */
  
  try {
    const repository = new PostRepository();
    
    const action = new CreatePostAction(repository);
    
    const post = await action.handlePostCreation(req.body.title, req.body.content);
    console.log("create_post:", post);
    
    res.status(201).json({
      message: "El post ha sido creado correctamente",
      id: post,
    });
    
  } catch (error) {
    if(error instanceof Error) {
      res.status(500).json({
        message:"El post no se ha podido crear",
        error:error.message
      })
    } else {
      res.status(500).json({
        message:"El post no se ha podido crear",
        error:"Error desconocido"
      })
    }
    
  }
}

/* Aquí tengo que poner las funciones para hacer el CRUD create, read, update, delete */