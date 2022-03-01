import { Request, Response } from "express";
import { get } from "../UseCases/ComunicacaoCompletaUseCase";
export class ComunicacaoCompletaController {
  async get(req: Request, res: Response) {
    const imovel_id = Number(req.params.imovel_id);
    const last = Number(req.params.last);
    try {
      const response = await get(imovel_id, last);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
