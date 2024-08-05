const express = require("express");
const router = express.Router();
const dataBase = require("../config/firebaseConfig");

router.post("/create", async (req, res) => {
  console.log("Recibida solicitud POST en /create");
  console.log("Cuerpo de la solicitud:", req.body);
  try {
    const { title, content } = req.body;
    console.log("Recibiendo datos:", { title, content });

    const docRef = await dataBase.collection("post").add({ title, content });

    const newDoc = await docRef.get();
    const postData = newDoc.data();

    console.log("INFO:-------NewDoc", newDoc, postData);

    res.status(201).json({
      message: "Done",
      id: docRef.id,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    res
      .status(500)
      .json({ message: "Error creating post", error: error.message });
  }
});

module.exports = router;
