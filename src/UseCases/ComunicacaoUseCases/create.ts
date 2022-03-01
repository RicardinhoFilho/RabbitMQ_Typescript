import { IComunicacao } from "../../Interfaces/IComunicacao";
import { Comunicacao } from "../../Model/Comunicacao";
import { ComunicacaoService } from "../../Services/ComunicacaoService";

export async function create(params: IComunicacao) {
  try {
    const comunicacao = new Comunicacao(params);
    const service = new ComunicacaoService();

    const create = await service
      .create(comunicacao.getComunicacao())
      .then((res) => {
        return res;
      });

    return create;
  } catch (error) {
    throw error;
  }
}
