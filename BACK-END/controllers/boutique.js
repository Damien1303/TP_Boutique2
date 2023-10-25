
import Model from '../models/Shoe.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { env } from '../config/index.js';
import Shoe from '../models/Shoe.js';

export const addShoes = async (req, res, ) => {
  try {
    const { nom, prix, description, image, like } = req.body;
    const newShoe = new Shoe({
      nom,
      prix,
      description,
      image,
      like,
    });

    // Sauvegardez la nouvelle chaussure dans la base de données
    const savedShoe = await newShoe.save();

    res.status(201).json(savedShoe); // Répondez avec la chaussure ajoutée
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de l\'ajout des chaussures en base de données.' });
  }
};

     
      


export const allShoes = async (req, res, next) => {
  try {
    const shoe = await Model.find();
    res.status(200).json(shoe);
  } catch (error) {
    next(error);
  }
};

export const oneShoe = async (req, res, next) => {
  try {
    const { id } = req.params;
    const shoe = await Model.findById(id);
    res.status(200).json(shoe);
  } catch (error) {
    next(error);
  }
};
export const delShoe = async (req, res, next) => {
  try {
    const shoe = await Model.findById(req.params.id);
    if (!shoe) res.status(404).json("Shoe not found.");

    await Model.findByIdAndDelete(req.params.id);
    res.status(200).json("The shoe has been delete.");
  } catch (error) {
    next(error);
  }
};
export const putShoe = async (req, res, next) => {
  try {
    // const {id} = req.params

    const shoe = await Model.findByIdAndUpdate(req.params.id, req.body,{new : true});
    if (!shoe) res.status(404).json("Shoe not found.");

    // await Model.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json("The shoe has been updated.");
  } catch (error) {
    next(error);
  }
};
export const likeShoe = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id)

    // Recherchez la chaussure par son identifiant unique (id)
    const shoe = await Shoe.findById(id);

    if (!shoe) {
      return res.status(404).json({ error: 'Chaussure non trouvée' });
    }
    console.log(shoe)
    // Incrémentez le nombre de "likes" pour cette chaussure
    shoe.like++ ;
console.log(shoe)
    // Sauvegardez la chaussure mise à jour dans la base de données
    await shoe.save();

    // Répondez avec la chaussure mise à jour (avec le nouveau nombre de "likes")
    return res.status(200).json(shoe);
  } catch (error) {
    console.error('Erreur lors de la mise à jour des "likes" de la chaussure', error);
    return res.status(500).json({ error: 'Erreur lors de la mise à jour des "likes"' });
  }
};
