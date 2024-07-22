// backend/index.js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Importar rutas
// const apiRoutes = require("./routes/api");
// app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
