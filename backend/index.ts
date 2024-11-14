// backend/index.js
import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import postsRouter from "./infrastructure/routes/post";
const PORT = process.env.PORT || 3000;

// Cargando variable de entorno
dotenv.config();

/* Express */
const app: Application = express();

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Endpoints
app.use("/api/posts", postsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
