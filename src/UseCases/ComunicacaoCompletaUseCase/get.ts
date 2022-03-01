import { ComunicacaoCompletaService } from "../../Services/ComunicacaoCompletaService";

export async function get(imovel_id: number, last: number) {
  try {
    const service = new ComunicacaoCompletaService();

    const get = await service.get(imovel_id, last).then((res) => {
      return res;
    });

    return get;
  } catch (error) {
    throw error;
  }
}
