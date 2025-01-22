import carros2024 from './tabelaCarros.js';

// Import o modulo do Express
import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (requisicao, resposta) => {
    resposta.status(200).send(carros2024); // Retorna lista de carro com staus 200
});

// Define a porta do servidor
app.listen(3000, () => {
    console.log('Servidor rodando com sucesso na porta 3000')
});

// executa o APP
// node app.js