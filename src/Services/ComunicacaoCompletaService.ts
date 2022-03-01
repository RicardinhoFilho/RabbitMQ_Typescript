
import Firebird from "node-firebird";
import { connection } from "../Database/connection";
import { IComunicacao } from "../Interfaces/IComunicacao";

export class ComunicacaoCompletaService {
  async get(imovel_id: number, last:number) {
    try {
      return new Promise((res, rej) => {
        Firebird.attach(
          connection,
          function callback(err, fb: Firebird.Database) {
            fb.query(
              ` select first 15 *  from comunicacao left join
              anexos_comunicacao on anexos_comunicacao.comunicacao_id = comunicacao .id where  comunicacao.imovel_id = ? and id < ? order by criacao desc ; `,
              [
               
                imovel_id,
                last,
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
