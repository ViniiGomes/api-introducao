import express from "express";      // Requisição do pacote do express
import dotenv from "dotenv";
import roteadorUsuario from "./routes/usuario.js";
const port = 3000;     
             // Define a porta
dotenv.config();

const app = express();

app.use(express.json());

app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});

//index.js

app.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  res.json({
    nome: "Vinícius Gomes Santos",      // Substitua pelo seu nome
  });
  console.log("Rota / solicitada");
});
app.use(roteadorUsuario);



