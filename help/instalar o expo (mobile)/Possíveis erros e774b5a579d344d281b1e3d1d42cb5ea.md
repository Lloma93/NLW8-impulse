# Possíveis erros

**O módulo 'Widget' não pode ser usado como component JSX.**

Segue os passos:

- Apaga a pasta `node_modules`
- Apaga o arquivo `package-lock.json`, se existir (cuidado, é o não **package.json**)
- Apaga o arquivo `yarn.lock`, se existir
- Instalar novamente os pacotes com `npm install`
- Por fim, realiza o reload do VSCode

**'AppLoading' cannot be used as a JSX component.**

Pode tentar importar o React no topo do arquivo:

```tsx
import React from 'react';
```

Pode tentar também mover o import do AppLoading para o topo.

E como última alternativa:

- Apagar a pasta `node_modules`
- Apagar o arquivo `package-lock.json` (cuidado, é o **package.json**)
- Executar `npm install`
- Reiniciar o VSCode

## Atualização do Expo 45

Caso esteja utilizando a SDK 45 do expo, tem algumas coisas que precisam ser feitas diferente.

Para conferir se está com a SDK 45, no arquivo `package.json`, procura por `expo`, se tiver o número **45**, está utilizando ela.

1 - A lib `expo-app-loading` a partir da SDK 45 foi depreciada, o Expo sugere utilizar a `expo-splash-screen`.

Execute:

```tsx
expo install expo-splash-screen
```

No arquivo `App.tsx` implemente [dessa forma](https://github.com/vinifraga/nlw-return-sdk45/blob/master/App.tsx#L12-L22).

2 - A lib `react-native-gesture-handler` precisa ser instalada na versão `2.1.0`, então utilize o comando:

```tsx
npm install react-native-gesture-handler@~2.1.0
```