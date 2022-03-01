import { Router } from "express";

import { AuthServices } from "../Services/AuthService";
import { authMiddleware } from "../Middlewares/authMiddleware";

const router = Router();
const baseUrl = "/autenticar";
const authServices = new AuthServices();

// router.get(`/autenticar/:id`, (req, res) => {
//   try {
//       console.log("veio")
//     const token = authServices.createToken(Number(req.params.id));

//     return res.status(201).json(token);
//   } catch (error) {
//     return res.status(400).json(error);
//   }
// });

router.get(`/teste`, authMiddleware, (req, res) => {
  try {
    return res.status(201).json(req.userId);
  } catch (error) {
    return res.status(400).json(error);
  }
});

export default router;
