import { Router } from "express";

import { ComunicacaoController } from "../Controllers/ComunicacaoController";
import { authMiddleware } from "../Middlewares/authMiddleware";

const router = Router();
const baseUrl = "/comunicacao";
const controller = new ComunicacaoController();


router.post(`${baseUrl}`, authMiddleware,controller.create);



export default router;
