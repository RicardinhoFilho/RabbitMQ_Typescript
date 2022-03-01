import fs from "fs";
export async function dropFile(path:string,file:string) {
  
    
    fs.unlink(`${path}/${file}`, (err) => {
        if (err) return `Não foi possivel excluir ${file}`;
      });
}