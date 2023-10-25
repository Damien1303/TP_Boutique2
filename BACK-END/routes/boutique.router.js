import express from "express";


import { addShoes, allShoes, oneShoe, delShoe, putShoe , likeShoe } from '../controllers/boutique.js';



const router = express.Router();

router.post("/addshoes", addShoes);

router.post("/like/:id", likeShoe);

router.get("/all", allShoes);


router.get("/findById/:id", oneShoe);

router.delete("/delete/:id",  delShoe);

router.put("/put/:id", putShoe);



export default router;