import admin from "firebase-admin";
import dotenv from "dotenv";
dotenv.config();

import * as fs from "fs";
const firebaseConfig = JSON.parse(fs.readFileSync("./serviceAccountKey.json"));

let dataBase;

try {
  admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig),
  });

  dataBase = admin.firestore();
} catch (error) {
  console.log("Error al iniciar firebase", error);
}

export default dataBase;
