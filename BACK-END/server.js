import express from 'express'
import { env } from './config/index.js';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import cors from 'cors'

//ROUTES
import boutiqueRoutes from './routes/boutique.router.js'

const app = express();

const PORT = process.env.PORT || 8000;

//DATABASE

mongoose
    .connect(env.mongoURL)
    .then(() => console.log("Connexion à MongoDB réussie!!"))
    .catch(error=> console.log(error))

 //MIDDLEWARE
 app.use(express.json());
 app.use(cookieParser());
 app.use(cors())

 

 //ROUTER
 app.use("/api/shoe", boutiqueRoutes);

 //SERVER

app.listen(PORT,() => {
    console.log(`Listening at http://localhost:${PORT}`);
});
// Importe le module "express" et l'assigne à la variable "express"
// import express from "express";

// Importe l'objet "env" depuis le fichier "./config/index.js" et l'assigne à la variable "env"
// import { env } from "./config/index.js";

// Importe le module "mongoose" et l'assigne à la variable "mongoose"
// import mongoose from "mongoose";

// Crée une instance de l'application Express et l'assigne à la variable "app"
// const app = express();

// Définit la variable "PORT" qui prend la valeur de la variable d'environnement "PORT" si elle est définie, sinon elle prend la valeur 8080 par défaut
// const PORT = process.env.PORT || 8080;

// Établit une connexion à la base de données MongoDB en utilisant l'URL spécifiée dans "env.mongoURL"
// mongoose
//   .connect(env.mongoURL)
//   .then(() => console.log("Connexion à MongoDB réussie !")) // Affiche un message si la connexion à MongoDB réussit
//   .catch((error) => console.log(error)); // Affiche une erreur si la connexion à MongoDB échoue

// Utilise le middleware d'Express pour traiter les requêtes JSON
// app.use(express.json());

// Démarre le serveur Express et écoute les connexions entrantes sur le port spécifié par "PORT"
// app.listen(PORT, () => {
//   console.log(`Listening at http://localhost:${PORT}`); // Affiche un message indiquant que le serveur écoute sur un port donné
// });