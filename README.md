# Accounts
Dependências:
inquirer
chalk

## Como usar:
1. Criar conta: aqui, basta digitar o nome.
2. Consultar saldo: informa o saldo presente no banco. Ao criar a conta, inicia-se com 0
3. Depósito: possibilita o depósito de saldo
4. Sacar: possibilita sacar o dinheiro
5. Sair: sai do programa

## Perguntas
1) O que seria uma API Rest e Restful?

REST vem de Representational State Transfer (Transferência de Estado Representacional) e é um estilo de arquitetura cujos tópicos principais, dentre outros, são:
   1. Cliente-servidor: há uma separação do backend com o frontend.
   2. Cacheável: O servidor deverá informar se poderá ou não ser as requisições serem salvas em cache pelo cliente para evitar requisições repetidas à toa.
   4. Stateless: cada requisição deve informar **todas** as informações necessárias. Ou seja, a API não irá guardar informações obtidas ou obtíveis anteriormente do usuário.
   5. Interface uniforme: Significa que o sistema precisa usar padrões claros: utilizar recursos (URLs bem estruturadas), manipular esses recursos através de representações (como JSON) e usar os métodos HTTP corretos.
   6. Sistema em camadas: O cliente não deverá precisar/poderá saber se está conectado diretamente ao servidor ou a um intermediário
   Uma API RESTful é uma API que cumpre tais requisitos.

2) Comparação sobre os diferentes tipos de API’s e as vantagens e desvantagens de cada um.

REST / RESTful: As vantagens incluem o fato de serem simples de criar, testar e ter bom cache da web. Uma das desvantagens é o fato de trazer dados que você não pediu ou obrigar o uso de múltiplas requisições para montar uma só tela.
   
GraphQL: As vantagens incluem o fato dela ditar os campos que precisa e trazer só o necessário na requisição, o que a torna excelente para telas dinâmicas e mobile. A desvantagem seria as dificuldades em fazer caches nela, e queries muito aninhadas podem gargalar o banco de dados.
   
gRPC: Trafega os dados em formato binário (Protocol Buffers), não em texto. É absurdamente rápido, perfeito para um microsserviço conversando com outro. A desvantagem seria o fato do navegador web não lida bem com ele nativamente e é mais difícil de se desenvolver com ele.
   
SOAP: As principais vantagens são o nível altíssimo de segurança e garantia de transações (usado principalmente por sistemas governamentais e bancos com sistemas legados). Porém, é pesado, consome muita banda e necessita de XML para tudo.

3) Sobre os verbos HTTP mais comuns (GET, POST, PUT, DELETE) e suas aplicações.

GET: Serve para obter dados do servidor;
POST: Envia dados **NOVOS** para o servidor.
PATCH: Ele envia patches, para que sejam aplicados a dados já cadastrados.
PUT: Envia **TODOS** os dados já cadastrados a serem substituídos.
DELETE: Deleta dados cadastrados.
