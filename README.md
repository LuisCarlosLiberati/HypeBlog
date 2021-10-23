# Hypeflame blog, Luis Liberati
pré requisito: instalar o pacote do node js.
ao baixar o projeto executar os seguintes comandos:

npm i para instalar as dependencias

npx cypress run  -> para executar todos os testes. (a execução será gravada e estará na pasta de vídeos)
npx cypress open -> para escolher qual teste executar.

executar a seguinte linha de comando para executar todos os testes no edge sem fechar o browser:
npx cypress run --browser edge --no-exit