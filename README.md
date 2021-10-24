# Hypeflame blog, Luis Liberati
pré requisito: instalar o pacote do node js.
Após baixar o projeto executar os seguintes comandos:

1º Abrir a pasta do projeto e executar:
"npm i" -> para instalar as dependencias do projeto.

2º Executar na pasta raiz do projeto o comando:
"npx cypress run"  -> para executar todos os testes. (a execução será gravada e estará na pasta de vídeos)

3º Para verificar os testes sendo executados pode-se utilizar o comando: 
"npx cypress open" -> e escolher qual teste executar.

executar a seguinte linha de comando para executar todos os testes no edge sem fechar o browser:
npx cypress run --browser edge --no-exit

Vídeos Execução