# Accounts

## Dependências
* `inquirer`
* `chalk`

## Como usar
1. **Criar conta**: Aqui, basta digitar o nome.
2. **Consultar saldo**: Informa o saldo presente no banco. Ao criar a conta, inicia-se com 0.
3. **Depósito**: Possibilita o depósito de saldo.
4. **Sacar**: Possibilita sacar o dinheiro.
5. **Sair**: Sai do programa.

---

## Perguntas

### 1) O que seria uma API Rest e Restful?

REST vem de *Representational State Transfer* (Transferência de Estado Representacional) e é um estilo de arquitetura cujos tópicos principais, dentre outros, são:

1. **Cliente-servidor**: Há uma separação clara entre o backend e o frontend.
2. **Cacheável**: O servidor deve informar se as requisições podem ou não ser salvas em cache pelo cliente para evitar requisições repetidas à toa.
3. **Stateless**: Cada requisição deve conter **todas** as informações necessárias. Ou seja, a API não guarda informações ou estados anteriores do usuário na memória.
4. **Interface uniforme**: Significa que o sistema precisa usar padrões claros, como utilizar recursos (URLs bem estruturadas), manipular esses recursos através de representações (como JSON) e usar os métodos HTTP corretos.
5. **Sistema em camadas**: O cliente não precisa (e nem deve) saber se está conectado diretamente ao servidor final ou a um intermediário (como um balanceador de carga).

Uma API **RESTful** é simplesmente uma API que cumpre todos esses requisitos na prática.

---

### 2) Comparação sobre os diferentes tipos de API’s e as vantagens e desvantagens de cada um.

* **REST / RESTful**:
  * **Vantagens**: Simples de criar, testar e possui um ótimo ecossistema de cache na web.
  * **Desvantagens**: Pode trazer dados que você não pediu (*overfetching*) ou te obrigar a fazer múltiplas requisições para montar uma única tela (*underfetching*).

* **GraphQL**:
  * **Vantagens**: O cliente dita exatamente os campos que precisa e o servidor traz só o necessário em uma única requisição. Excelente para telas dinâmicas e aplicativos mobile.
  * **Desvantagens**: Grande dificuldade para implementar caches HTTP nativos, e consultas muito aninhadas podem sobrecarregar e gargalar o banco de dados.

* **gRPC**:
  * **Vantagens**: Trafega dados em formato binário (*Protocol Buffers*) em vez de texto puro. É absurdamente rápido e ideal para comunicação direta entre microsserviços.
  * **Desvantagens**: O navegador web não lida bem com ele nativamente e sua curva de aprendizado/desenvolvimento é mais complexa.

* **SOAP**:
  * **Vantagens**: Oferece um nível altíssimo de segurança integrada e garantias rígidas de transações. Muito usado por sistemas governamentais e bancos com sistemas legados.
  * **Desvantagens**: É extremamente pesado, consome muita banda e exige o uso burocrático de XML para absolutamente tudo.

---

### 3) Sobre os verbos HTTP mais comuns e suas aplicações.

* **GET**: Serve exclusivamente para obter/ler dados do servidor sem alterá-los.
* **POST**: Envia dados **NOVOS** para criar um recurso do zero no servidor.
* **PATCH**: Envia modificações parciais (como um "remendo") para serem aplicadas a dados que já existem.
* **PUT**: Envia **TODOS** os dados de um recurso para substituí-lo por completo (sobrescreve o registro antigo).
* **DELETE**: Remove/deleta dados cadastrados no servidor.
