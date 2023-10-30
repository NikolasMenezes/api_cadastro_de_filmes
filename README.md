# API RESTful de Cadastro de Filmes

Esta é uma API RESTful desenvolvida com Node.js, Express, TypeScript e MongoDB que permite o cadastro, consulta, atualização e exclusão de filmes.


## Rotas

### Cadastro de Filme

- **Rota**: `POST /api/movie/create`
- **Corpo da Requisição**: JSON com os dados do filme, por exemplo:
   ```json
   {
     "title": "Filme A",
     "rating": 8,
     "director": "Diretor A",
     "description": "Descrição do filme",
     "stars": ["chaves", "Kiko"]
   }
   ```

### Consulta de Filme por ID

- **Rota**: `GET /api/movie/:id`
- **Parâmetros**: `id` é o ID único do filme.

### Atualização de Filme por ID

- **Rota**: `PATCH /api/movie/:id`
- **Parâmetros**: `id` é o ID único do filme.
- **Corpo da Requisição**: JSON com os campos a serem atualizados.

### Exclusão de Filme por ID

- **Rota**: `DELETE /api/movie/:id`
- **Parâmetros**: `id` é o ID único do filme.

### Listagem de Todos os Filmes

- **Rota**: `GET /api/movies`

## Licença

Este projeto é licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

```