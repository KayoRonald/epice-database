<h1 align="center">
    <strong>EPICE 💜</strong>
</h1>


### **💻 Tecnologias e Dependência**

Esse projeto foi feito utilizando as seguintes tecnologias:

| Tecnologias | Sites                           |
| ----------- | ------------------------------- |
| Nodejs      | https://nodejs.org/             |
| Knex        | http://knexjs.org/              |
| TypeScript  | https://www.typescriptlang.org/ |


# 🤔 **Como contribuir?**

- Faça um `fork` desse repositório;
  
- Cria uma `branch` com a sua feature: `git checkout -b minha-feature`;
  
- Faça `commit` das suas alterações: `git commit -m 'feat: Minha nova feature'`;

- Faça push para a sua branch: `git push origin minha-feature`.


### 🚀 **Como rodar o projeto?**

 **Pré-requisito**
 
<blockquote>

- É necessário possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador (recomendado a versão LTS).

- Também, é preciso ter um gerenciador de pacotes o npm e npx já vem por padrão ao instalar o node.j ou **[Yarn](https://www.npmjs.com/package/yarn)**.

- É necessário possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador.
  
</blockquote>


<br/>

**1. Faça um clone do repositório ou Fork:**

```bash 
  https://github.com/KayoRonald/epice-database
```

**2. Executer a Aplicação:**

Abrindo o terminal, você pode executar o seguinte comando para entrar no diretório do projeto:

```bash
  cd epice-database
```

**3. Como instalar as dependências**
Nesse caso, você pode usar o yarn ou npm para instalar e rodar a aplicação.

```bash
yarn 
```

```bash
npm install
```

**4. Faça a conexão do banco de dados na sua máquina**

Você pode se conectar localmente usando uma ferramenta de manipulação de banco de dados visual ou um serviço online. Usando `yarn dev` ou `npm run dev`, a aplicação começará usando o `cross-env NODE_ENV=development`, ou seja, será conectado usando um arquivo que será criado na raiz do projeto chamado `db.db`. Para a visualização das colunas pode ser feita usando uma extensão do código vs chamada MySQL. Mas, você pode colocar em `production` e passar suas credenciais de conexão.

```json
"scripts": {
  "start": "cross-env NODE_ENV=production tsc && node ./dist/src/server.js",
  "dev": "cross-env NODE_ENV=development ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts",
  "test": "cross-env NODE_ENV=development jest",
},
```
NODE_ENV=production Ambiente de produção
NODE_ENV=development Ambiente de desenvolvimento

```.env
MYSQL_HOST=
MYSQL_DATABASE=
MYSQL_USER=
MYSQL_PASSWORD=
```

**5. Rodar a migração para criar as tabelas**

```bash
yarn knex migrate:latest
```

**6. Rodar o seed:run**

Agora podemos executar o comando abaixo na raiz do nosso projeto para semear nosso banco de dados

```bash
yarn knex seed:run
```

**7. Inicar nossa aplicação**

Executando em ambiente de desenvolvimento:
cross-env NODE_ENV=development ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts

```bash
yarn dev

```

```bash
npm run dev
```
Executando em ambiente de produção:
cross-env NODE_ENV=production tsc && node ./dist/src/server.js

```bash
yarn start
```

```bash
npm start
```


<hr/>


<p align="center">
  <img src="https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png" width="100" title="Nodejs">
  <img src="https://277969009-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/spaces%2F-Lf4a7JZE8Gwa4Y0EaRf%2Favatar.png?generation=1559220593217278&alt=media" width="100" alt="TypeScript" title="TypeScript">
  <img src="https://iconape.com/wp-content/files/bl/347262/svg/knexjs-seeklogo.com.svg" width="100" alt="chakra" title="Knexjs"
</p>