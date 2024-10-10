import express from "express";
import { isAdmin, requireSihnIn } from "../middleware/authMiddlewarw.js";
import {
  categoryControlller,
  createCategoryController,
  deleteCategoryCOntroller,
  singleCategoryController,
  updateCategoryController,
} from "./../controllers/categoryControllers.js";

const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  requireSihnIn,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSihnIn,
  isAdmin,
  updateCategoryController
);

//getALl category
router.get("/get-category", categoryControlller);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSihnIn,
  isAdmin,
  deleteCategoryCOntroller
);

export default router;
