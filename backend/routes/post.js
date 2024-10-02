const express = require("express");
const router = express.Router();

router.post("/create", (req, res) => {
  console.log("Recibida solicitud POST en /create");
  console.log("Cuerpo de la solicitud:", req.body);
  try {
    const { title, content } = req.body;
    console.log("Recibiendo datos:", { title, content });
    res
      .status(201)
      .json({ message: "Post created successfully", data: { title, content } });
  } catch (error) {
    console.error("Error creating post:", error);
    res
      .status(500)
      .json({ message: "Error creating post", error: error.message });
  }
});

module.exports = router;
