// post.routes.js
const express = require("express");
const router = express.Router();

// Importez le contrôleur des posts 
const postController = require("../controllers/post.controller");

//162 VIOLET Fialana FARANY ANOSIZATO  

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);




// Définissez les routes pour les posts


// Exportez le router
module.exports = router;
