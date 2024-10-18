import dataBase from "../config/firebaseConfig.js";
import PostRepository from "../repositories/PostRepository.js";
import CreatePostAction from "../../actions/CreatePostAction.js";

export default async function createPost(req, res) {
  console.log("Recibida solicitud POST en /create");
  console.log("Cuerpo de la solicitud:", req.body);
  const repository = new PostRepository(dataBase);
  const action = new CreatePostAction(repository);

  const post = await action.handlePostCreation(req.body.title, req.body.content);
  console.log("create_post:", post);
  

  res.status(201).json({
    message: "El post ha sido creado correctamente",
    id: post,
  });
}

/* Aquí tengo que poner las funciones para hacer el CRUD create, read, update, delete */
