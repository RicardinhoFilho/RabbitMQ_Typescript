import Firebird from "node-firebird";
import { connection } from "../Database/connection";
import { IAnexo } from "../Interfaces/IAnexo";
import { dropFile } from "../utils/dropFile";
import { anexos_folder } from "../utils/path";

export class AnexoService {
  async create(anexo: IAnexo) {
    try {
      return new Promise((res, rej) => {
        Firebird.attach(
          connection,
          function callback(err, fb: Firebird.Database) {
            fb.query(
              `INSERT INTO anexos_comunicacao(IDENTIFICADOR, COMUNICACAO_ID) VALUES(?,?) RETURNING IDENTIFICADOR,COMUNICACAO_ID `,
              [anexo.IDENTIFICADOR, anexo.COMUNICACAO_ID],
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
      dropFile(anexos_folder, anexo.IDENTIFICADOR);
      throw error;
    }
  }
}
