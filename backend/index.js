// backend/index.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
// Importar las rutas definidas en posts.js
const postsRouter = require("./routes/post");

//Habilitar Cors
app.use(cors());
// Middleware para manejar JSON
app.use(bodyParser.json());

//Endpoints
app.use("/api/posts", postsRouter);

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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
