import { Request, Response } from "express";
import { IComunicacao } from "../Interfaces/IComunicacao";
import { create } from "../UseCases/ComunicacaoUseCases";
export class ComunicacaoController {
  async create(req: Request, res: Response) {
    const comunicacao: IComunicacao = req.body;

    try {
      const response = await create(comunicacao);

      return res.status(201).json(response);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
