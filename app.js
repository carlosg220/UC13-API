import express from 'express';

// importa as rotas 
import carroRoutes from './routes/carroRoutes.js';

const app = express();

// Permite o Express entender .JSON
app.use(express.json());

app.use("/carros", carroRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});