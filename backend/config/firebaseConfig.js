const admin = require("firebase-admin");
const dotenv = require("dotenv");

dotenv.config();

try {
  admin.initializeApp({
    credential: admin.credential.cert(
      require(process.env.FIREBASE_SERVICE_ACCOUNT_KEY),
    ),
  });
  const dataBase = admin.firestore();

  module.exports = dataBase;
} catch (error) {
  console.log("Error al iniciar firebase", error);
}
