import { Router } from "express";

import { ComunicacaoCompletaController } from "../Controllers/ComunicacaoCompletaController";
import { authMiddleware } from "../Middlewares/authMiddleware";

const router = Router();
const baseUrl = "/messages";
const controller = new ComunicacaoCompletaController();

router.get(`${baseUrl}/:imovel_id/:last`, controller.get);

export default router;
