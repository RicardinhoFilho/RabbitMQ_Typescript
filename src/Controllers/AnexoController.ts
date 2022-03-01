import { Request, Response } from "express";
import { IAnexo } from "../Interfaces/IAnexo";
import { create } from "../UseCases/AnexoUseCases";
export class AnexoController {
  async create(req: Request, res: Response, file: string) {
    const anexo: IAnexo = req.body;
    anexo.IDENTIFICADOR = file;
    try {
      const response = await create(anexo);

      return res.status(201).json(response);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
