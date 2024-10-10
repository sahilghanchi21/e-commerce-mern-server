import express from "express";
import {
  registerController,
  loginController,
  testControoler,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authControllers.js";
import { isAdmin, requireSihnIn } from "../middleware/authMiddlewarw.js";

//router object
const router = express.Router();

//routing

//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || METHOD POST
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requireSihnIn, isAdmin, testControoler);

//protected User route auth
router.get("/userauth", requireSihnIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected Admin route auth
router.get("/adminauth", requireSihnIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
//update profile
router.put("/user-profile", requireSihnIn, updateProfileController);

//orders
router.get("/user-orders", requireSihnIn, getOrdersController);

//all orders
router.get("/all-orders", requireSihnIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSihnIn,
  isAdmin,
  orderStatusController
);
export default router;
