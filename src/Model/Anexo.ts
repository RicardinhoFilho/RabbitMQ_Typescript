import { IAnexo } from "../Interfaces/IAnexo";

export class Anexo {
  private anexo: IAnexo;

  constructor(anexo: IAnexo) {
    this.valida(anexo);
    this.anexo = anexo;
  }

  public get() {
    return this.anexo;
  }

  private valida(anexo: IAnexo) {
    if (anexo.IDENTIFICADOR.trim().length == 0) {
      throw "Um anexo não pode ser criado sem identificador";
    }

    if (anexo.COMUNICACAO_ID <= 0) {
      throw "Um anexo deve referenciar uma comunicação válida!";
    }
  }
}
