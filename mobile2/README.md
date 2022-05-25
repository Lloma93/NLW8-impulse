# Expo 
### criando aplicação mobile com Expo

JS bundle -> .APK e IPA

SDK com um conjunto de funcionalidades prontas
para usar (câmera, vídeo, integrações, etc).

Em minutos você tem seu ambiente de
desenvolvimento mobile pronto.

Rode seu aplicativo direto no seu dispositivo pela
rede enquanto desenvolve.


// instalar o expo 
$ expo init mobile
Selecionar blank typescript

#instalar o expoGo no celular
$ expo start

### R component
add extensão do vcCode criado pela rocketseat: snippets para react native

###
fontes: https://docs.expo.dev/guides/using-custom-fonts/
$ expo install expo-font @expo-google-fonts/inter

loader para carregar as fontes
expo install expo-app-loading



lib ícones
https://www.npmjs.com/package/phosphor-react-native
npm install --save phosphor-react-native

lib lidar com svg
expo install react-native-svg


auxiliar no iphone
https://github.com/ptelad/react-native-iphone-x-helper
npm i react-native-iphone-x-helper --save

bottom sheet
https://gorhom.github.io/react-native-bottom-sheet/
$ expo install react-native-reanimated react-native-gesture-handler
$ expo install react-native-reanimated

$ expo install react-native-gesture-handler

// incluir no babel `babel.config.js`:
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};

importar no appJS
import 'react-native-gesture-handler';

## expo start --clear 
limpar o cache 