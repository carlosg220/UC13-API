import Joi from 'joi';

// Validação para o modelo de carro
export const modeloCarro = Joi.object({
        nome: Joi.string().min(3).required().messages({
                'string.min': 'O Nome do carro deve ter pelo menos 3 caracteres.',
                'any.required': 'O Nome do carro é obrigatório.',
        }), // nome do carro, pelo menos 3 caracteres

        sigla: Joi.string().length(3).required().messages({
                'string.min': 'A sigla deve ter exatamente 3 caracteres.',
                'any.required': 'A sigla é obrigatória.',
        }), // Sigla ou medelo, 3 caracteres

        velocidadeMaxima: Joi.number().min(1).required().messages({
                'string.min': 'A velocidade máxima deve ser a maior ou igual a 1.',
                'any.required': 'A velocidade máxima é obrigatório.',
        }), // Potência minima e 1 Cv

        potencia: Joi.number().min(1).required().messages({
                'string.min': 'A pontência deve ser maior ou igual a 1.',
                'any.required': 'A potência é obrigatório.',
        }), // Velocidade minima de 1km/h

        consumo: Joi.number().min(0.1).required().messages({
                'string.min': 'O consumo deve ser maior ou igual a 0.1.',
                'any.required': 'O consumo é obrigatório.',
        }),  // Ano de fabricação
});

// Validação para atualização de carro
export const modeloAtualizacaoCarro = Joi.object({
        nome: Joi.string().min(3), // nome do carro, pelo menos 3 caracteres
        sigla: Joi.string().length(3), // Sigla ou medelo, 3 caracteres
        velocidadeMaxima: Joi.number().min(1), // Potência minima e 1 Cv
        potencia: Joi.number().min(1), // Velocidade minima de 1km/h
        consumo: Joi.number().min(0.1)  // Ano de fabricação
})