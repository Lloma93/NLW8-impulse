

iniciando o projeto
$npm init -y //criar o package.json

instalando as dependências:
$npm i typescript @types/node ts-node-dev -D
// ts-node-dev atualizar o app /high reloader

$ npx tsc --init //ou npx typescript
cria o arquivo `tsconfig.json`
alterar o target para " "target": "es2020", "

criar a pasta src 
criar arquivo server.ts
-----/src
---------/server.ts

no `tsconfig.json`
"rootDir": "./src",
"outDir": "./dist"

rodar
$npx tsc

criar um novo script 
```json
// package.json

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "ts-node-dev src/server.ts" //rodar a aplicação em modo watch
  },
```
agora podemos rodar a aplicação com 
$npm run dev

---------------
express p/ manipular as rotas 
$npm i express

import express from 'express'
// instalar a tipagem
$ npm i --save-dev @types/express

// banco de dados SQlite
vantagens, não precisa instalar ou realizar um setup 
ao longo do desenvolvimento utilizaremos o Prisma

#"""Prisma
https://www.prisma.io/ 

// prisma tbm ORM abstrai a sintaxe e converte em sql no final
SQLite em ambiente de desenvolvimento 
e podemos trocar para outro banco de dados devido ao suporte do prisma
$npm i prisma -D
$npm i @prisma/client

---
$npx prisma init
cria arquivo+ 
.env para variáveis de ambiente
e a pasta prima
além do .gitignore

prima/schema.prisma
#mudar para o sqlite https://www.prisma.io/docs/concepts/database-connectors/sqlite 
´
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}
´

mudar a url do .env tbm
file:./dev.db


bancos relacionais
Tabelas x Colunas X id
para referência de items espe´cificos pesquisar squema
https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#string 
exemplo 
@db.Varchar(200)

 ´  // primarykey
  id String @id

  //Varchar x Text @db.VarChar
  type String 
  comment String
  screeshot String?

  add 'Adds syntax highlighting, formatting, -> extenção do Prisma no VsCode
  [ctrl + P] >settings.json 
  abrir configurações .json
add
  `
    "[prisma]": {
    "editor.formatOnSave": true
  }
  `

  depois de inserir o que queremos das tabelas no schema.prima, precisamos rodar
  $npx prisma migrate dev
  // para prod trocar dev por deploy
  para criar de fato a tabela em nossa base
  // dar nome para essa ação
  create feedbacks


``` retorno
migrations/
  └─ 20220525004523_create_feedbacks/
    └─ migration.sql

Your database is now in sync with your schema.

✔ Generated Prisma Client (3.14.0 | library) to .\node_modules\@prisma\client in 127ms

```

para ver -> ou baixar uma interface
ou rodar
$npx prisma studio
modal = tabela não relacional
¨add item pela interface


o prisma cria uma pasta migrations
dentro dela fica uma pasta com a data anomesdiahora_nomeDado
dentro dela tem um arquivo sql 

--migrations: uma forma de manter um controle de versão/versionamento entre as tabelas e assim temos o histórico de toda
e qualquer alteração dentro de um banco de dados, assim conseguindo desfazer qualquer alteração 
--mais segurança em prod e evita muitas pessoas alterando o mesmo banco de dados
"git" para código e "migration" para sql


---com a tabela criada, vamos criar os métodos http para acrescentar a info na mesma
server.ts


review métodos https
GET = buscar informações
POST = cadastrar informações
PUT - atualizar informações de uma entidade
PATCH = atualizar uma info única (algum campo exato) de uma entidade
DELETE = deletar uma informação 

extensão para requisições rest no vsCode: RestClient oou insominia x postamn x mockoon

#Insomnia
create > request collection 
NLWREturn8
criar chamada tipo post
http://localhost:5000/feedbacks ---> body:JSON
{
	"type": "BUG",
	"comment": "deu ruim mas bom no insomnia"
}

após criar e testar o método http, precisamos equiparar com o nosso banco de dados

criar um arquivo prisma.ts
> 

arquivo anddo para exibir logs no terminal
```
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    log: ['query']
})

```


https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/201

#envio de e-mail
instalar uma biblioteca para o envio de e-mail
$npm i nodemailer

p/ evitar erro de tipagem
npm i @types/nodemailer -D

// smtp
serviço de envio de e-mail 
(smtp google -> limite 100emails por dia)
(smtp mailgun)
sparkpost
mailchimp

--> mailtrap.io 
vamos usar esse
criar conta (#######.avanade@gmail)
abrir inboxes
NLW-8
(abrir)
settings -> escolher a integração com o nodemailer

```
var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "82dd91de36d5f7",
    pass: "4a637e80c753e3"
  }
});
```

princípios do SOLID
# SOLID
1 - single responsability 
2 - open-close principle
3 - liskov substituin principle
4 - interface segragation principle
5 - dependency inversion principle
-----------------
1. { princípio de uma responsabilidade única} : cada classe/função tem uma responsabilidade única; "a função faz issoo e isso" evite o EEE

2. as classes da aplicação devem ser abertas para extensão e fechadas para modificação;

3.
nós devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando;

4. (tipagem ajuda) Impressora => imprimir, scannear, digitalizar
                        cada classe para uma interface 

5.inverter as dependencias das classes => feedback x envio de e-mail 
             "diferença de dependência" e "uso" de outra classe / função 
             não validamos a responsabilidade de outros serviços 

------

criar pastas (1)
####outras pessoas entendam e consigam dar manutenção
repositories ou databases
// repositories pattern
//data mapper pattern
cada item deve referir a uma entidade

----
criar a pasta
use-cases ou services

---
adapter
pasta para envio de e-mail e sms
-----------------------------------


# Jest
iniciando testes com jest
ferramenta/framework para testes automatizados e unitários

$ npm i jest -D
$ npx jest --init
/Would you like to use Jest when running "test" script in "package.json"? / Y
/Would you like to use Typescript for the configuration file?/ y
/ Choose the test environment that will be used for testing/ node
/Do you want Jest to add coverage reports?/ y
/ Which provider should be used to instrument code for coverage?/ v8
/ Automatically clear mock calls, instances, contexts and results before every test?/y
----test config.ts

para usar o jest com typescript também precisqamos usar o ts-node
$ npm i ts-node -D

// jest interpreta aquivos js
pacotes 
ts-jest ------- compiler do typescript 
--usar o babel 
------------swc / compiler para JS ou TS mais rápido q o babel!
$ npm i -D jest @swc/jest

Inside jest.config.js, configure Jest to use SWC:

module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
};

---------poderia ser
{
    "^.+\\.ts?$": ["@swc/jest"],
  },
  ------------------
  arquivo.spec.ts

// tipagem de teste do jest
  $npm i @types/jest -D
  (pacote q exporta tipagem junto om o pacote +++)

  // rodar os testes com $ npm run test

  --------------
   spies = espiões 
   ----------------------------------

   integrando com o frontend localmente
   para evitar o erro de cors:
   $ npm i cors
   $ npm i @types/cors -D


### 
npm run dev 
npx prisma studio

----------
deploy do BE
#postgresql
url de conexão .env
$npx tsc //cria a dist para o deploy 
add a pasta dist no gitignore e jest

incluir scripts no package json    
"buid": "npx tsc", //realiza a conversão de TS para JS gerando pasta dist
"start": "node dist/server.js" //roda o servidor a partir da dist

https://railway.app/ 
![image](https://user-images.githubusercontent.com/35180706/175085806-c46c0b29-352a-4677-9a71-deec92cc6cc9.png)


Criar BD postgree // pegar a variável e add ao projeto
DATABASE_URL -> atrelar a conexão do banco de dados


------
railway: habilitar PR :) 


