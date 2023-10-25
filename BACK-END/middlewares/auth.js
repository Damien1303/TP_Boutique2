import jwt from 'jsonwebtoken'
import { env } from '../config/index.js'
import { createError } from './error.js'

export const verifyToken = (req, res, next) => {
    //Récupère le jeton (token) JWT à partir des cookies de la requete
    
    const token = req.cookies.access_token;
    console.log(token);

    //Vérifie si le jeton n' est pas présent
    //Si le jeton (token) n' est pas présent, renvoie une erreur 401 'accès refusé'
    if(!token) return next(createError(401,"Access Denied"))

    // Vérifier validité du jeton en utilisant jwt.verify
    jwt.verify(token, env.token, (err, players) => {
        // Si une erreur s' est produit dans la vérification du jeton
        if(err){
            //Renvoie une erreur 403(interdit) car le jeton (token) n' est pas valide
            return next(createError(403, "Token non valide !"))
        }
        //Si la vérification est réussie, on ajoute les informations du joueur dans l' objet req
        req.players = players;
        next();
    })
}