# ViaGol

### O Projeto está divido em duas pastas, viagol possui o projeto do frontend, em angular e a pasta viagol_api possui a API.

Para iniciar, após o fork/clone, acesse a pasta viagol_api e execute o comando `dotnet run`, a API estará disponivel na porta 5001.

Em outra janela do terminal, acesse o diretorio viagol/viagol e execute o comando `yarn && yarn start` ou `npm && npm run start`, para iniciar o frontend, que estará disponivel na porta 4200.

#### Backend
Optei em ultilizar o InMemory do EntityFramework, uma vez que devido sua abstração, não teria um ressultado final diferente, do código e assim nós garantimos que não teremos problemas com drivers e/ou versões de servidores de banco de dados.

##### API
Para autenticação optei em ultilizar JWT.

###### Rotas

###### USER

Metodo: GET 

Endpoint: `GET v1/users`

Função: Retornar a lista de todos usuários

Requer JWT: Sim


Metodo: POST

Endpoint: `v1/users`

Função: criar um usuario

Requer JWT: Não


Metodo: PUT
Endpoint: `v1/users/id:`
Função: editar um usuario
Requer JWT: Sim

###### TRAVELS
Metodo: GET 
Endpoint: `v1/travels/users/id:`
Função: Retornar a lista de todas as viagens de um usuário especifico.
Requer JWT: Sim

Metodo: POST
Endpoint: `v1/travels`
Função: criar uma viagem
Requer JWT: Sim

Metodo: PUT
Endpoint: `v1/travels/id:`
Função: editar um viagem
Requer JWT: Sim

Metodo: DELETE
Endpoint: `v1/travels/id:`
Função: deleta uma viagem
Requer JWT: Sim

###### AUTH
Metodo: LOGIN 
Endpoint: `v1/login`
Função: Valida um email e senha e retorna o token JWT
Requer JWT: Não
