let carros2025 = [
    {
        nome: 'Ferrari',
        sigla: 'FER',
        velocidadeMaxima: 340,
        potencia: 800,
        consumo: 5.5, 
    },
    {
        nome: 'Lamborghini',
        sigla: 'LAM',
        velocidadeMaxima: 355,
        potencia: 770,
        consumo: 6.2,
    },
    {
        nome: 'Civic',
        sigla: 'HON',
        velocidadeMaxima: 215 ,
        potencia: 184,
        consumo: 6.8,
    },
    {  
        nome: 'Tesla',
        sigla: 'TSL',
        velocidadeMaxima: 261,
        potencia: 213,
        consumo: 9.2,
    },

];

// Função que retorna todos os carros no Array
export const getAllCarros = () => carros2025;

// Função que retorna um carro específico pelo indeificador (Sigla)
export const getCarroBySigla = (sigla) => {
    return carros2025.find(carro => carro.sigla === sigla);

};

export const createCarro = (novoCarro) => {
    carros2025.push(novoCarro); // Adiciona um novo carro ao final da lista
    return novoCarro;
};

// Função que atualiza as informações de um carro existente, com base na sigla
export const updateCarro = (sigla, dadosAtualizados) => {
    // Busca o indice do carro no Array
    const carroIndex = carros2025.findIndex(carro => carro.sigla === sigla);
    if (carroIndex === -1) return null; // Se não encontrar carro retorna null
    // Atualiza o carro com as informações fornecidas
    carros2025[carroIndex] = { ...carros2025[carroIndex], ...dadosAtualizados }; // O spread ( ... ) é comumente usada para fazer cópias superficiais de objetos JavaScript 
    return carros2025[carroIndex];
};

// Funções que remove um carro do array, com base na sigla
export const deleteCarro = (sigla) => {
    // Busca o indece do carro no array usando a sigla
    const carroIndex = carros2025.findIndex((carro) => carro.sigla === sigla);
    if (carroIndex === -1) return null;
    // Remove o carro da lista e retorna o carro removido
    const [carroRemovido] = carros2025.splice(carrosIndex, 1);
};