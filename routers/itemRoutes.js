const express = require("express");
const router = express.Router();
const itemController = require ("../controller/itemController");

router.post("/", itemController.createItem)
router.get("/", itemController.getItems);
router.put("/:id", itemController.updateItem);
router.delete("/:id", itemController.deleteItem);

module.exports = router;