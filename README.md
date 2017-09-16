# restful-nodejs-restify
RESTful com Node.js, Restify e MySQL em Ambiente Dockerizado

> Este projeto foi desenvolvido durante o acompanhamento da série de screencasts disponível em [https://www.youtube.com/playlist?list=PLFJmwzuHdBRTBbkyH0gATtDhj6ikOIkMy](https://www.youtube.com/playlist?list=PLFJmwzuHdBRTBbkyH0gATtDhj6ikOIkMy) que é pré-requisito para o curso **Single Page Application com Vue.js** [http://www.treinatom.com.br/pt/edukee/detalhes-do-evento/190edc6b7593e3081a858f55652abd92a9d07353](http://www.treinatom.com.br/pt/edukee/detalhes-do-evento/190edc6b7593e3081a858f55652abd92a9d07353).

## Pré-requisitos
- **Node.js** versão 8 ou superior;
- **Nodemon** - `npm i -g nodemon`;
- **Docker** versão 17.07 ou superior;
- **Docker Compose** versão 1.16.1 ou superior;
- **Ambientum**.

## Adaptações
Como tenho preferência por trabalhar em ambientes dockerizados, fiz algumas adaptações no projeto, implementando um container docker para rodar a aplicação, fazendo uso do **[Ambientum](https://github.com/codecasts/ambientum)**.

> E qual a vantagem dessas adaptações que fiz? Existem diversas vantagens, mas vou apenas frisar uma delas, que é a não obrigação de instalação e preparação de todo um ambiente de desenvolvimento. Que necessitaria a instalação por exemplo do nodejs, npm, mysql e etc.

## Mas o que é? E o que faz esse tal Ambientum?
O Ambientum é um conjunto de imagens **[Docker](https://www.docker.com/)** desenvolvidas, mantidas e distribuidas pelo **[CODECASTS](https://codecasts.com.br)**. E ele pode lhe ajudar com algumas coisas incríveis, os 3 cenários mais comuns estão listados a seguir:

- **Rodar Laravel e/ou Vue.JS em Desenvolvimento.**
- **Rodar Laravel e/ou Vue.JS em Produção (Includindo Integração Contínua).**
- **Substituir dependências locais com comandos que rodam no Docker.**

## Blz, e o que eu Preciso Saber Antes de Começar?

Sem sombra de dúvidas, o Ambientum irá facilitar a sua vida em muito, principalmente no que diz respeito a ambientes de desenvolvimento dockerizados, mas antes de você começar a brincar com o Ambientum, alguns conhecimentos são necessários:

* O básico sobre Docker e Containers.
* Estar confortável usando a linha de comando.
* Saber operar o docker-compose.
* Ler o **README** do Ambientum.

Mas não se preocupem, o readme está escrito em dois idiomas: Inglês e Português.

## Instalação e Execução
1. Faça o clone do repositório e no terminal navegue até a pasta;
...

## Sugestão
Utilize o Postman para testar suas chamadas. [https://www.getpostman.com/](https://www.getpostman.com/).