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

1. Faça o clone do repositório e no terminal navegue até a pasta criada com os comandos abaixo:

```
git clone git@github.com:vs0uz4/restful-nodejs-restify.git
cd restful-nodejs-restify
```

2. Faça uma cópia do .env.example para um novo arquivo com nome de .env e preencha os valores das variáveis de acordo com as variáveis de ambiente configuradas no arquivo docker-compose.yml. 

```
cp .env.example .env
```

Exemplo de configuração das variáveis.
```
SERVER_PORT=3456

MYSQL_HOST=mysql
MYSQL_USER=restful_ws
MYSQL_PASSWORD=restful_ws
MYSQL_DATABASE=restful_ws
MYSQL_TEST_DATABASE=restful_ws_test

JWT_SECRET=bf21391faaa389b98d62053230feba28a288fd93
```

> As variáveis de ambiente para configuração da `porta` do servidor e as relacionadas ao banco de dados `mysql`, devem obrigatoriamente coincidirem com as mesmas informadas no arquivo docker-compose.yml.

3. Instale as dependências globais no container com os comandos abaixo:

```
docker-compose run web npm i -g npm nodemon
```

4. Inicialize os containers.

```
docker-compose up
```

5. Crie as tabelas da base de dados principal com os comandos abaixo:

```
docker-compose exec mysql mysql -uroot -prestful_ws

USE `restful_ws`;

CREATE TABLE `categories` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
```

> Sem desconectar e/ou sair do mysql, siga os passos seguintes.

6. Adicione a base principal, um usuário padrão para podermos nos conectar posteriormente. 

```
INSERT INTO `users` (email, password) VALUES ('admin@example.com', SHA1('123456'));
```

7. Crie a base de dados de teste, suas respectivas tabelas e aplique as políticas de segurança no MYSQL para o usuário da aplicação.

```
CREATE DATABASE `restful_ws_test`;

USE `restful_ws_test`;

CREATE TABLE `categories` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

GRANT ALL ON restful_ws.* TO 'restful_ws'@'%';
GRANT ALL ON restful_ws_test.* TO 'restful_ws'@'%';
FLUSH PRIVILEGES;
```

> Após o termino da realização dos procedimentos acima listados, faça a desconexão do MySQL, para isto basta executar no console do banco de dados o comando: `\q`. 

## Executando Testes
Para executarmos os testes apresentados no decorrer da série, em uma nova aba do console, digitarmos o seguinte comando:

```
docker-compose exec web npm run test
```

> Caso seja necessário executar os testes em modo `watch`, basta acrecentarmos ao comando anterior `-- --watch`.

```
docker-compose exec web npm run test -- --watch
```

## Sugestão
Utilize o Postman para testar suas chamadas. [https://www.getpostman.com/](https://www.getpostman.com/).