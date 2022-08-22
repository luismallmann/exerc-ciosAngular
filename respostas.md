## 1. Descreva com suas palavras como é feita a instalação do Framework Angular passo-a-passo. 

A instalação do Angular é realizada por meio do terminal de comando cmd. Para possibiltar a instalação, um pré-requisito é que o Node.JS esteja previamente instalado na máquina. Cumprida esta exigência, basta insirir o seguinte comando no terminal para realizar a instalação do Angular:
    npm install -g @angular/cli

A verificação da versão instalada é feita pelo comando: 
    ng version

Já para criar um novo projeto: 
    ng new helloWorld

O acesso e incialização de um projeto é realizado da seguinte maneira: (prompt deve estar vinculado a pasta do projeto)
    ng serve --open 


## 5. Observe e compare o repositório local e o repositório remoto. 
    - Há diferenças? 
    - Se sim, quais? 
    - Por que essas diferenças ocorrem?

Há diferenças entre as diferentes versões, pois, algumas pastas e arquivos não são carregados do diretório local para o diretório remoto. Tais arquivos são vinculados a instalação e ao cache de depedências instaladas. Isso ocorre devido ao fato de ao solicitar a criação de um novo projeto Angular, ser criado um arquivo .gitignore onde são automaticamente definidos os diretórios que devem ser ignorados pelo GitHub.

## 6. Apague o repositório local e clone o remoto devolta para sua máquina e rode o projeto.   
    **Dica:**
    - Após clonar o projeto, você precisará baixar as dependências desse projeto. 
    - Qual comando do Node instala as dependências? 
    - Como o Node sabe quais dependências precisam ser instaladas? 
As dependências são instaladas pelo comando npm install ou simplesmente npm i. Ao acionar tal comando, o node verifica o arquivo package.json. Neste arquivo, estão armazenadas as dependências necessárias para executar o projeto e consequentemnte as que devem ser instaladas para o perfeito funcionamento.
