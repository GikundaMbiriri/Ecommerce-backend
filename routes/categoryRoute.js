const express = require("express");
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getAllCategory,
} = require("../controller/categoryCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMidleware");

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createCategory);
router.put("/:id", authMiddleware, isAdmin, updateCategory);
router.get("/:id", authMiddleware, isAdmin, getCategory);
router.get("/", authMiddleware, isAdmin, getAllCategory);
router.delete("/:id", authMiddleware, isAdmin, deleteCategory);
module.exports = router;
