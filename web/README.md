código de consulta ----------------------------------------------------------------

### criando um novo projeto 
$npm create vite@latest
react-ts

// vite ferramenta para converter o JS para o browser de maneira moderna 
-----// webpack -> antigo processador para o bundle , babel
www.caniuse.com -> funcionalidades compatíveis ao navegador



instalar as dependências do projeto:
$npm i 

Typescript = JavaScript (JS) com Tipagem => TS
JSX JavaScript + XML "html" 
.jsx + .ts = .tsx


rodar projeto
$npm run dev

---------------------------------------------------------------------------------


// componente: função que retorna um html -> sempre deve começar com uma letra maiúscula 
// propriedade: atributos atrelados a um component 



---------

### lib css
## tailwind
https://tailwindcss.com/docs/installation
$ npm install -D tailwindcss postcss autoprefixer
$ 
// -p post css que integra junto com o vet, recompilando assim q houver alteração css
Add the paths to all of your template files in your tailwind.config.js file.
// mudar para .tsx

global.css
@tailwind base;
@tailwind components;
@tailwind utilities;

instalar extensão Tailwind CSS IntelliSense no VScode para facilitar na visualização dos tokens

// ------------------------

exportar x importar com ou sem {} 
// export default App  -> import App
// export App -> import { App } : principal benefício, não errar o nome


para formulários instalar o tailwindcss-forms um plugin para facilitar a estilização de formulários 
https://github.com/tailwindlabs/tailwindcss-forms
$ npm install -D @tailwindcss/forms

// add no arquivo `tailwind.config.js`  o plugin

```js
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#8257E5'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
```

o scrollbar nativo pode estar estranho, principalmente em navegadores do mac
para lidar com isso temos um pacote no npm
https://www.npmjs.com/package/tailwind-scrollbar

$npm install --save-dev tailwind-scrollbar
```js
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#8257E5'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
```

------------
## screenshots

lidar com o screenshot de telas
https://html2canvas.hertzen.com/
$ npm install --save html2canvas


-------------
## ícones

phosphor-icons
https://phosphoricons.com/
https://github.com/phosphor-icons/phosphor-react

install
npm install --save phosphor-react

mudar cor global 
inspecionar -> inspect / styled x computed 
abrir tailwind.config.js
##extend-color criar novas cores e tons


----------------------------------------------

// estado: variáveis que são observadas e ao serem alteradas, geram um render
ou seja, quando um valor muda o react precisa atualizar a variável e renderizar novamente o componente 



--------------------------------
## acessibilidade com react

exemplos de libs existentes:
reakit ---> mudou para ariakit
radix-ui 

#### headless UI -> lib utilizada por ser integrada com tailwind
utilizar a doc https://headlessui.dev/

#npm install @headlessui/react