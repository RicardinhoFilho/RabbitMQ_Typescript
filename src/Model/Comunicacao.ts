import { IComunicacao } from "../Interfaces/IComunicacao";

export class Comunicacao {
  private comunicacao: IComunicacao;

  constructor(comunicacao: IComunicacao) {
    this.validade(comunicacao);

    comunicacao.CRIACAO = new Date();

    this.comunicacao = comunicacao;
  }

  public getComunicacao() {
    return this.comunicacao;
  }

  private validade(comunicacao: IComunicacao) {
    if (
      !comunicacao.FUNCIONARIO_CARTORIO_ID &&
      !comunicacao.FUNCIONARIO_PREFEITURA_ID
    ) {
      throw "Comunicação sem ID de funcionário!";
    }

    if (!comunicacao.IMOVEL_ID) {
      throw "A comunicação não se refere à nenhum imóvel.";
    }

    // if (comunicacao.MENSSAGEM.trim().length == 0) {
    //   throw "Não é possivel criar uma comunicação sem menssagem de texto!";
    // }
  }
}
