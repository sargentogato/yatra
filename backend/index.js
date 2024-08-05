// backend/index.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3000;

//Cargando variable de entorno
dotenv.config();

/* Express */
const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Importar las rutas definidas en posts.js
const postsRouter = require("./routes/post");

//Endpoints
app.use("/api/post", postsRouter);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

//Rutas
app.post("/post", (request, response) => {
  response.send({
    message: `Hello ${request.body.email}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
