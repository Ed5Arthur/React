# Sistema de Elegibilidade de Voto

# Sistema de Verificação de Elegibilidade para Voto com React

Este projeto é um sistema simples de verificação de elegibilidade para voto criado com React. O sistema permite que os usuários insiram sua idade e verifiquem se podem votar, de acordo com regras relacionadas à idade e ao registro para votação.

## Funcionalidades Principais

- **Entrada de Idade**: O usuário pode inserir sua idade para determinar a elegibilidade.
- **Verificação de Registro**: O sistema verifica se o usuário está registrado para votar.
- **Resultado da Verificação**: Informa ao usuário se ele pode votar, se o voto é opcional ou se precisa se registrar para votar.
- **Renderização Condicional**: A verificação só aparece quando a idade é informada.

## Estrutura do Projeto

- **App.js**: Componente principal que controla o estado da aplicação, gerencia a entrada de idade e o estado de registro do usuário.
- **VoteCheck.js**: Componente responsável por determinar e exibir a elegibilidade para votação, com base na idade e no estado de registro.
- **styles.css**: Arquivo de estilo que define a aparência do aplicativo, com um design simples e limpo.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **CSS Modularizado**: Cada componente possui seu próprio estilo, garantindo uma estrutura organizada e modular.

## Como Executar o Projeto

1. Clone o repositório:  
   `git clone https://github.com/seu-usuario/nome-do-repositorio.git`

2. Instale as dependências:  
   `npm install`

3. Execute o projeto:  
   `npm start`

4. Abra no navegador:  
   `http://localhost:3000`

## Expansões Futuras

O projeto pode ser expandido para incluir mais funcionalidades, como autenticação de usuários ou uma integração com uma API real para gerenciamento de registros eleitorais.
