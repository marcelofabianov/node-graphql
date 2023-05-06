# Node GraphQL

Este é um exemplo de como utilizar GraphQL com Node e outras tecnologias

### Sobre

Este projeto mostra como criar um servidor GraphQL utilizando as tecnologias mencionadas acima. O TypeScript é utilizado para trazer tipagem e segurança de tipos para o código, enquanto o SWC é utilizado para compilar o código TypeScrip. O Apollo Server é utilizado para criar o servidor GraphQL em si, e o Nodemon é utilizado para reiniciar o servidor automaticamente a cada mudança no código. O Pino é um logger utilizado para logar as requisições e respostas do servidor, e o Dotenv é utilizado para carregar variáveis de ambiente a partir de um arquivo .env.

### Tecnologias utilizadas

- [x] Dotenv
- [x] TypeScript
- [x] SWC
- [x] Nodemon
- [x] Pino
- [x] GraphQL
- [x] Apollo Server
- [x] Jest
- [x] Husky
- [x] Eslint
- [x] Prettier
- [x] Commitizen cs-cli
- [ ] SuperTest
- [ ] Prisma

### Instalação

Para instalar o projeto, basta clonar o repositório e rodar o comando npm install na raiz do projeto.

```bash
git clone https://github.com/marcelofabianov/node-graphQL-swc-nodemon-pino && npm install && chmod +x .husky/pre-commit
```

### Execução

Para rodar o servidor em modo de desenvolvimento, basta rodar o comando npm run dev:server na raiz do projeto. O servidor irá reiniciar automaticamente a cada mudança no código.

```bash
npm run dev:server
```

Para rodar o servidor em modo de produção, basta rodar o comando npm start na raiz do projeto.

```bash
npm start:prod
```

### Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou pull request no repositório.
