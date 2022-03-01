import Firebird from "node-firebird";
import { connection } from "../Database/connection";
import { IComunicacao } from "../Interfaces/IComunicacao";

export class ComunicacaoService {
  async create(comunicacao: IComunicacao) {
    try {
      return new Promise((res, rej) => {
        Firebird.attach(
          connection,
          function callback(err, fb: Firebird.Database) {
            fb.query(
              `INSERT INTO COMUNICACAO(FUNCIONARIO_CARTORIO_ID, FUNCIONARIO_PREFEITURA_ID, IMOVEL_ID, MENSSAGEM, CRIACAO) VALUES(?,?,?,?,?) RETURNING ID,FUNCIONARIO_CARTORIO_ID, FUNCIONARIO_PREFEITURA_ID, IMOVEL_ID, MENSSAGEM, CRIACAO `,
              [
                comunicacao.FUNCIONARIO_CARTORIO_ID
                  ? comunicacao.FUNCIONARIO_CARTORIO_ID
                  : null,
                comunicacao.FUNCIONARIO_PREFEITURA_ID
                  ? comunicacao.FUNCIONARIO_PREFEITURA_ID
                  : null,
                comunicacao.IMOVEL_ID,
                comunicacao.MENSSAGEM,
                comunicacao.CRIACAO,
              ],
              (err, result) => {
                if (err) rej(err);
                res(result);
                fb.detach();
              }
            );
          }
        );
      });
    } catch (error) {
      throw error;
    }
  }
}
