// backend/index.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

//Habilitar Cors
app.use(cors());

// Middleware para manejar JSON
app.use(express.json());

// Importar las rutas definidas en posts.js
const postsRouter = require("./routes/post");
app.use("/api/posts", postsRouter);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
