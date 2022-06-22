# Finalizando o deploy :) 


vite.env
https://vitejs.dev/guide/env-and-mode.html#env-files 
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[mode]         # only loaded in specified mode
.env.[mode].local   # only loaded in specified mode, ignored by git

https://vitejs.dev/guide/env-and-mode.html 


criar o arquivo .env.local
VITE_API_URL=http://localhost:5000

não esquecer de criar com o "VITE_" antes das variáveiss

##web
deploy com vercel -> https://vercel.com/ 
importar/ sincronizar projeto

![image](https://user-images.githubusercontent.com/35180706/174922230-e2346031-a952-42a9-a159-1195469683a4.png)
selecionar vite e pasta web
![image](https://user-images.githubusercontent.com/35180706/174922408-4d19564d-6dd5-49f2-86fb-ad61fd1b22cc.png)


