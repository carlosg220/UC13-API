import {getAllCarros, getCarroBySigla, createCarro as modelCreateCarro, updateCarro as modelUpdateCarro, deleteCarro as modelDeleteCarro} from "../models/carroModels.js";

import { modeloCarro, modeloAtualizacaoCarro } from "../validations/carroValidations.js";

// Função para retornar todos os carros
export const getCarros = (req, res) => {
    // Chama a função que retorna todos os carros da base de dados (ou Array)
    const carros = getAllCarros();
    // Retrona todos os carros com status 200
    res.status(200).json(carros);
};

// Função para retornar um carro especifico com base na sigla 
export const getCarro = (req, res) => {
    const { sigla } = req.params;
    // Chama a função que retorna o carro pela sigla 
    const carro = getCarroBySigla(sigla.toUpperCase());

    // Se não for encontrado retorna erro 404
    if (!carro) {
        return res.status(404).json({ mensagem: ' Carro não encontrado! '});
    }

    // Retorna o carro encontrado com status 200
    res.status(200).json(carro)
};

// Função para criar um novo carro
export const createCarro = (req, res) => {
    const { error } = modeloCarro.validate(req.body);

    // Se houver erro da validação, retorna status 404
    if (error) {
        return res.status(400).json({ mensagem: error.details[0].message })
    }

    // Dados válidos, cria um novo carro
    const novoCarro = req.body;
    // Chama a função para adicionar o novo carro à base de dados (ou Arrays)
    const carroCriado = modelCreateCarro(novoCarro);
    // Retorna o carro criando com o status 201
    res.status(201).json(carroCriado);
};

// Função para atualizar os dados de um carro existente
export const updateCarro = (req, res) =>{
    const {sigla} = req.params;
    // Valida os dados de atualização com base no modelo
    const {error} = modeloAtualizacaoCarro.validate(req.body);
    // Se ouver erro de validação, retorna status 400
    if (error) {
        return res.status(400).json({mensagem: error.details[0].message });
    }
 
    // Chama a função para atualizar os dados do carro, passando a sigla e os novos dados
    const carroAtualizado = modelUpdateCarro(sigla.toUpperCase(), req.body);
 
    // Se o carro não for encontrado para atualização, retorna 404
    if(!carroAtualizado) {
        return res.status(404).json( { mensagem:'Carro não encontrado para atualização' })
    }

    res.status(200).json(carroAtualizado);
};

export const deleteCarro = (req, res) => {
    const { sigla }= req.params;
    // Chama a função para remover o carro, passando a sigla 
    const carroRemovido = modelDeleteCarro(sigla.toUpperCase());

    // Se o carro não for encontrado para remoção, retorna status 404
    if(!carroRemovido) {
        return res.status(404).json({ mensagem: 'Carro não encontrado para remoção!'});
    }

    // Retorna uma mensagem de sucesso e os dados do carro removido com status 200
    res.status(200).json({ mensagem: 'Carro removido com sucesso!', carro : carroRemovido})
};