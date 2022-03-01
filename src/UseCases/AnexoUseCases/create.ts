import { IAnexo } from "../../Interfaces/IAnexo";
import { Anexo } from "../../Model/Anexo";
import { AnexoService } from "../../Services/AnexoService";

export async function create(params: IAnexo) {
  try {
    const comunicacao = new Anexo(params);
    const service = new AnexoService();

    const create = await service.create(comunicacao.get()).then((res) => {
      return res;
    });

    return create;
  } catch (error) {
    throw error;
  }
}
