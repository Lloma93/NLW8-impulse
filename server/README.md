

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