export const swaggerDocument =
{
  "swagger": "2.0",
  "info": {
    "description": "API de banco de currículos.",
    "version": "1.0.0",
    "title": "Banco de Currículos API",
    "contact": {
      "email": "larissa.loureiro@ymail.com"
    },
    "license": {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
    }
  },
  "host": "https://bancodecurriculos-back.herokuapp.com",
  "basePath": "/",
  "tags": [
    {
      "name": "users"
    }
  ],
  "schemes": [
    "https",
    "http"
  ],
  "paths": {
    "/users": {
      "post": {
        "tags": [
          "users"
        ],
        "summary": "Adiciona um novo cadastro de usuário",
        "description": "Adiciona um novo cadastro de usuário no banco de dados",
        "operationId": "addUser",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Usuário a ser adicionado no banco de dados",
            "required": true,
            "schema": {
              "$ref": "#/definitions/User"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Cadastro criado com sucesso",
            "schema": {
              "$ref": "#/definitions/User"
            }
          },
          "400": {
            "description": "Entrada inválida"
          }
        }
      }
    }
  },
  "definitions": {
    "User": {
      "type": "object",
      "properties": {
        "nome": {
          "type": "string"
        },
        "cargo": {
          "type": "string"
        },
        "nascimento": {
          "type": "string"
        },
        "estadoCivil": {
          "type": "string",
          "description": "Estado civil do usuário",
          "enum": [
            "solteiro",
            "casado",
            "divorciado",
            "viuvo",
            "separado"
          ]
        },
        "genero": {
          "type": "string",
          "description": "Gênero do usuário",
          "enum": [
            "homemcis",
            "homemtrans",
            "mulhercis",
            "mulhertrans",
            "naobinario",
            "naoresponder"
          ]
        },
        "endLogradouro": {
          "type": "string"
        },
        "endNumero": {
          "type": "string"
        },
        "endComplemento": {
          "type": "string"
        },
        "endBairro": {
          "type": "string"
        },
        "endCidade": {
          "type": "string"
        },
        "endEstado": {
          "type": "string"
        },
        "endCep": {
          "type": "string"
        },
        "contatoFixo": {
          "type": "string"
        },
        "contatoTel": {
          "type": "string"
        },
        "contatoCelular": {
          "type": "string"
        },
        "contatoNome": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "identidade": {
          "type": "string"
        },
        "cpf": {
          "type": "string"
        },
        "possuiVeiculo": {
          "type": "boolean"
        },
        "possuiHabilitacao": {
          "type": "boolean"
        }
      }
    }
  }
}