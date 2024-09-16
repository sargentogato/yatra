import admin from "firebase-admin";
import dotenv from "dotenv";
// import * as fs from "fs";
dotenv.config();

// const firebaseConfig = JSON.parse(fs.readFileSync("./serviceAccountKey.json"));
const firebaseConfig = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

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
