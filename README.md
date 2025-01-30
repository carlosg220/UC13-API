# API de Carros - WEBAPI

Esta pe uma API em construção, que será uma API RESTful desenvolvida para o gerenciamentode informações de carros, utilizando
**node.js** e **Express**. A API permite, criar, ler, atualizar e excluir carros, com validação dos dados utilizando a biblioteca **Joi**.

Edte é um projeto CRUD (Create, REAd, Update, Delete), que será expandido no futuro. Este é apenas o escopo incial.

## Funcioladidades

- **GET /**: Retorna a lista completa de carros.
- **GET /:sigla**: Retorna as informações de um carro específico, indentificando pela sigla
- **POST /**: Adiciona um novo carro à lista 
**PUT /:sigla**: Atualiza as informações de um carro específico, indetidificando pela sigla
**DELETE /:sigla**: Remove um carro específico pela sigla

## Estrutura incial do Projeto 

- **app.js**: Arquivo principal que configura o servidor Express e as rotas da API.
- **tabelacarros.js**: Contém a lista de carros (dados fictícios).
- **validacao.js**: Contém as validações Joi para os dados do carros.

## Tecnologias usadas

- **Node.js**: Ambiente e execução para JavaScript.
- **Express**: FrameWork para a contrução de API REST.
- **Joi**: Biblioteca para validação de dados.

## Endpoints

### 1. **GET /**

Retorna a lista completa de carros disponíveis.

#### Exemplo de respostas:

```json
[
    {
        "nome": "Ferrari",
        "sigla": "FER'",
        "velocidadeMaxima": "340",
        "potencia": "800",
        "consumo": "5.5", 
    },

]
```

## Como rodar o Projeto

1. **Clone este repositório**
 
    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```
 
2. **Instale as dependências:**
 
    Navegue até o diretório do projeto e execute o comando:
 
    ```
    npm install
    ```
3.  **Inicie o servidor**
 
    Após a instalação das dependências, inicie o servidor:
 
    ```
    node ./app.js
    ```
 
4. **Acesse a API**
 
    A API estará disponível em [http://localhost:3000](http://localhost:3000).
   