//Revisar si es necesario para usar el firebase
import admin from "firebase-admin";
/* Revisar si esto es correcto para el tipo de TS */
import { firestore } from "firebase-admin";
import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

let database:firestore.Firestore;
/* 
try { 
  admin.initializeApp({
    //He colocado el non-null assertion operator ! a firebaseConfig. Lo uso porque estoy seguro que nunca será undefined
    credential: admin.credential.cert(firebaseConfig!),
  });
  database = admin.firestore();
  
} catch (error) {
  console.log("Error al iniciar firebase", error);
}

export default database;
    */

function inicializeDatabase () {
  //app es un array de firebase 
  if(!admin.apps.length) {
    try { 
      admin.initializeApp({
        //He colocado el non-null assertion operator ! a firebaseConfig. Lo uso porque estoy seguro que nunca será undefined
        credential: admin.credential.cert(firebaseConfig!),
      });
      database = admin.firestore();
      
    } catch (error) {
      console.log("Error al iniciar firebase", error);
      //Si hay un error sale
      return;
    } 
  }
  
  return database;
} 


export default inicializeDatabase();