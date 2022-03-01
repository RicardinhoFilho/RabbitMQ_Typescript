import express from "express";
import cors from "cors";
import comunicacaoRoutes from "./Routes/comunicaco.routes";
import anexoRoutes from "./Routes/anexo.routes";
import comunicacaoCompletaRoutes from "./Routes/comunicacaoCompleta.routes";
import indexRoutes from "./Routes/index.routes";

const app = express();

app.use(cors());

app.use(express.json({ limit: "10000kb" }));
app.use(
  express.urlencoded({
    extended: false,
    limit: "10000kb",
    parameterLimit: 1000000,
  })
);

app.use(comunicacaoRoutes);
app.use(indexRoutes);
app.use(anexoRoutes);
app.use(comunicacaoCompletaRoutes);

app.listen(3355, () => console.log("Server started at http://localhost:3355"));
