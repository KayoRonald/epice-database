<h1 align="center">
    <strong>EPICE 💜</strong>
</h1>

## **💻 Tecnologias e Dependência**

Esse projeto foi feito utilizando as seguintes tecnologias:

| Tecnologias | Sites                           |
| ----------- | ------------------------------- |
| Nodejs      | https://nodejs.org/             |
| Knex        | http://knexjs.org/              |
| TypeScript  | https://www.typescriptlang.org/ |

## Deploy

<div>
    <a href="https://railway.app/">
        <img src="https://railway.app/button.svg" />
    </a>
    <a href="https://heroku.com/">
        <img src="https://www.herokucdn.com/deploy/button.svg" />
    </a>
</div>

## 💁‍ **Como contribuir?**

- Faça um `fork` desse repositório
  
- Cria uma `branch` com a sua feature: `git checkout -b minha-feature`
  
- Faça `commit` das suas alterações: `git commit -m 'feat: Minha nova feature'`

- Faça push para a sua branch: `git push origin minha-feature`


## 🚀 **Como rodar o projeto?**

 **Pré-requisito**
 
<blockquote>

- É necessário possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador (recomendado a versão LTS).

- Também, é preciso ter um gerenciador de pacotes o npm e npx já vem por padrão ao instalar o node.j ou **[Yarn](https://www.npmjs.com/package/yarn)**.

- É necessário possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador.
  
</blockquote>


<br/>

**1. Faça um clone do repositório:**

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

> **Note**
> 
> Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

```.env
MYSQL_HOST=
MYSQL_DATABASE=
MYSQL_USER=
MYSQL_PASSWORD=
POSTGRES_URL=
NODE_ENV=development
```

Tabela de descrição sobre `NODE_ENV`

| valores     | Descrição                       |
| ----------- | ------------------------------- |
| development | Ambiente de desenvolvimento     |
| staging     | Ambiente pré-produção           |
| production  | Ambiente de produção            |

**5. Rodar a migração para criar as tabelas**

```bash
yarn knex migrate:latest
```
Comando para deletar o banco de dados
```bash
yarn knex migrate:rollback
```

**6. Rodar o seed:run (opcional)**

Semelhante às migrações, o módulo knex nos permite criar scripts para inserir dados iniciais em nossas tabelas chamadas de arquivos de semente!

```bash
yarn knex seed:run
```

**7. Inicar nossa aplicação**

Executando em ambiente de desenvolvimento:

```bash
yarn dev

```

```bash
npm run dev
```

Executando em ambiente de produção:

> **Warning**
> 
> Antes de rodar o start, é necessário rodar o build para execultar

```bash
yarn build
```

```bash
yarn start
```

```bash
npm build
```

```bash
npm start
```

<hr/>

<div align="center">
  <img src="assets/nodejs.png" width="100" title="Nodejs"/>
  <img src="assets/typescript.png" width="100" alt="TypeScript" title="TypeScript" />
  <img src="assets/knex-logo.png" width="100" alt="Knexjs" title="Knexjs" />
</div>
