const router = require("express").Router();
const {connexion,addUser} = require("../controllers/post.controller.js")

router.post("/login",connexion);
router.post("/",addUser)


module.exports = router;