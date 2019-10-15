const express = require("express");
const router = express.Router();
const Thing = require("../models/thing");
const stuffCtrl = require("../controllers/stuff");

router.post("/", stuffCtrl.createThing);
router.get("/:id", stuffCtrl.getOneThing);
router.put("/:id", stuffCtrl.modifyThing);
router.delete("/:id", stuffCtrl.deleteThing);
router.get("/", stuffCtrl.getAllStuff);

module.exports = router;
