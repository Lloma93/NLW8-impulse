# Deploy NLW - Impulse

Nesse documento nós faremos o deploy da aplicação Feedget, desenvolvida durante a Next Level Week Return, de maneira gratuita, utilizando o Heroku e a Vercel.

# Deploy do servidor da aplicação

Nosso primeiro passo será fazer o upload do nosso servidor, é ele que irá conectar com nosso banco de dados e salvar os dados que serão utilizados pelo nosso front-end.

## Enviando a aplicação ao Heroku

Finalmente a parte que você tanto esperava, o **deploy!** Agora que estamos 100% preparados com nossa aplicação, com banco de dados PostgreSQL e só esperando para ser colocada em produção, vamos começar acessando a página do [Heroku](https://www.heroku.com/), para isso, [clique aqui](https://www.heroku.com/).

### Preparando o deploy

Estando na página inicial do Heroku, no canto superior direito existem duas opções: Log In e Sign Up, para você logar ou se cadastrar. Basta clicar em uma delas e seguir os passos. Caso você já tenha uma conta basta logar nela. 

Feito isso, você deverá ter a seguinte tela:

![Deploy%20NLW%20-%20Impulse%20dc65c5868ec740cda955a330d7c4b9b3/Untitled.png](Deploy%20NLW%20-%20Impulse%20dc65c5868ec740cda955a330d7c4b9b3/Untitled.png)

Apenas clique no botão "Create New App" e você terá a seguinte tela, onde eu dei um nome para o meu App (o nome deve ser único):

![Untitled](Deploy%20NLW%20-%20Impulse%20dc65c5868ec740cda955a330d7c4b9b3/Untitled%201.png)

Agora clique em `Create app` e você vai ser redirecionado para essa tela, onde vamos selecionar "Heroku Git":

![Untitled](Deploy%20NLW%20-%20Impulse%20dc65c5868ec740cda955a330d7c4b9b3/Untitled%202.png)

### Instalando e configurando a CLI

Com o App criado, vamos agora à instalação da CLI. Para isso, basta seguir a [documentação oficial do heroku](https://devcenter.heroku.com/articles/heroku-cli). Faça somente a instalação, pois a configuração faremos a seguir de outra maneira. Portanto, deixe de seguir a documentação no passo em que ela indicar para fazer login (”heroku login").

Após feita a instalação, vamos iniciar agora a configuração do deploy via CLI. Execute os seguintes comandos no seu terminal: 

1. `heroku login`
    - Uma página será aberta para acessar sua conta do Heroku.
2. `heroku buildpacks:set https://github.com/timanovsky/subdir-heroku-buildpack`
3. `heroku buildpacks:add heroku/nodejs`
4. `heroku config:set PROJECT_PATH=server`
    - A env `PROJECT_PATH` serve para informar em qual pasta o nosso projeto está e
    deverá ser rodado.
5. `heroku git:remote -a NOME_DO_PROJETO`
    - Lembre-se de alterar no comando para o nome do seu projeto no github.
6. `git push heroku main`

## Preparando o banco de dados

Bacana, por enquanto tudo certo! Agora vamos configurar nosso banco de dados.

### Criando a instância do banco de dados

Primeiramente, basta acessar o menu no canto superior direito e depois clicar em Elements.

![Untitled](Deploy%20NLW%20-%20Impulse%20dc65c5868ec740cda955a330d7c4b9b3/Untitled%203.png)

Você será levado a uma página com diversas extensões para adicionar ao seu projeto, vamos adicionar então o Heroku Postgres:

![Deploy%20NLW%20-%20Impulse%20dc65c5868ec740cda955a330d7c4b9b3/Untitled%204.png](Deploy%20NLW%20-%20Impulse%20dc65c5868ec740cda955a330d7c4b9b3/Untitled%204.png)

Feito isto, você será redirecionado para uma página onde será feita a instalação da extensão. Basta clicar em Install Heroku Postgres.

![Deploy%20NLW%20-%20Impulse%20dc65c5868ec740cda955a330d7c4b9b3/Untitled%205.png](Deploy%20NLW%20-%20Impulse%20dc65c5868ec740cda955a330d7c4b9b3/Untitled%205.png)

Agora é só selecionar o app que você acabou de criar, clicar no botão **Submit Order Form** e pronto!

![Untitled](Deploy%20NLW%20-%20Impulse%20dc65c5868ec740cda955a330d7c4b9b3/Untitled%206.png)

Agora na página que você foi redirecionado, clique no nome da extensão instalada:

![Untitled](Deploy%20NLW%20-%20Impulse%20dc65c5868ec740cda955a330d7c4b9b3/Untitled%207.png)

### Configurando credenciais do banco de dados

Você verá que o Heroku automaticamente vai adicionar um **DATABASE_URL**. No Heroku, a env de **PORT** não é necessária adicionar, pois, essa informação é gerenciada automaticamente por eles. Já a env de **PROJECT_PATH** foi adicionada no passo de [Instalando e configurando a CLI](Deploy%20NLW%20-%20Impulse%20dc65c5868ec740cda955a330d7c4b9b3.md), ela serve para falar em qual pasta o nosso projeto está e deverá ser executado.

![Untitled](Deploy%20NLW%20-%20Impulse%20dc65c5868ec740cda955a330d7c4b9b3/Untitled%208.png)

### Executando as migrations

Execute o comando abaixo no terminal em que estava configurando o projeto.

```tsx
heroku run npx prisma migrate deploy
```

![Untitled](Deploy%20NLW%20-%20Impulse%20dc65c5868ec740cda955a330d7c4b9b3/Untitled%209.png)

Prontinho! Suas migrations foram executadas! Agora você poderá acessar seu servidor clicando no botão "Open app" e copiando a URL da página.

![Untitled](Deploy%20NLW%20-%20Impulse%20dc65c5868ec740cda955a330d7c4b9b3/Untitled%2010.png)