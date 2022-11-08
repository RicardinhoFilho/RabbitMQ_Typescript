import { Router } from "express";

const router = Router();



router.post(`/`, (req, res) => {
    return res.status(200).json({
      data: req.body,
      status: true,
      message: "Dados recebidos com sucesso!",
    });
  });


  router.get(`/`, (req, res) => {
    return res.status(200).json({
      data: [
        { id: "1", nome: "Ricardo" },
        { id: "2", nome: "Sandro" },
        { id: "3", nome: "Márcia" },
        { id: "5", nome: "Ricardo Filho" },
      ],
      status: true,
      message: null,
    });
  });

export default router;
