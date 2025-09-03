# OFICINA II - Sistema de Cadastro Escolar

## 📚 Descrição do Projeto

Sistema de cadastro de alunos e professores desenvolvido em Node.js com Express, PostgreSQL e Prisma ORM, estruturado no padrão MVC (Model-View-Controller). Este projeto foi desenvolvido como parte da disciplina Oficina II.

## 👥 Equipe

- **Daniely Mélo** - CRUD de Alunos e Estrutura Inicial do Projeto
- **Gabriel Mozart** - CRUD de Professores

## 🚀 Tecnologias Utilizadas

- **Backend**: Node.js + Express.js
- **Banco de Dados**: PostgreSQL
- **ORM**: Prisma
- **Arquitetura**: MVC (Model-View-Controller)
- **Testes de API**: Postman/Insomnia

## 📋 Funcionalidades

### 🎓 Módulo Alunos
- ✅ Listar todos os alunos
- ✅ Cadastrar novo aluno
- ✅ Atualizar dados do aluno
- ✅ Excluir aluno

### 👨‍🏫 Módulo Professores
- ✅ Listar todos os professores
- ✅ Cadastrar novo professor
- ✅ Atualizar dados do professor
- ✅ Excluir professor

## 🗄️ Modelo de Dados

### Aluno
```javascript
{
  id: number,        // Inteiro, autoincrementado
  nome: string,      // Nome completo do aluno
  email: string,     // Email único
  idade: number      // Idade do aluno
}
```

### Professor
```javascript
{
  id: number,        // Inteiro, autoincrementado
  nome: string,      // Nome completo do professor
  email: string,     // Email único
  idade: number      // Idade do professor
}
```

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js (v18 ou superior)
- PostgreSQL
- npm ou yarn

### 1. Clone o repositório
```bash
git clone https://github.com/daniolivem/oficina-ii-capacita.git
cd oficina-ii-capacita
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configuração do Banco de Dados

#### 3.1 Configure o arquivo `.env`
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/oficina_ii?schema=public"
```

#### 3.2 Execute as migrações
```bash
# Sincronizar schema com o banco
npx prisma db push

# Gerar cliente Prisma
npx prisma generate
```

### 4. Inicie o servidor
```bash
npm start
# ou
node src/server.js
```

O servidor estará rodando em: `http://localhost:3000`

## 📖 Documentação e Exemplos da API

### 🎓 Endpoints - Alunos

#### Listar todos os alunos
```http
GET /alunos
```

**Resposta:**
```json
[
  {
    "id": 1,
    "nome": "João Silva",
    "email": "joao@email.com",
    "idade": 20
  }
]
```

#### Cadastrar novo aluno
```http
POST /alunos
Content-Type: application/x-www-form-urlencoded

nome=João Silva
email=joao@email.com
idade=20
```

**Resposta (Sucesso - 201):**
```json
{
  "message": "Aluno criado com sucesso",
  "aluno": {
    "id": 1,
    "nome": "João Silva",
    "email": "joao@email.com",
    "idade": 20
  }
}
```

**Resposta (Erro - 400):**
```json
{
  "error": "Dados inválidos. Por favor, preencha todos os campos."
}
```

**Resposta (Erro - 409):**
```json
{
  "error": "E-mail já cadastrado."
}
```

#### Atualizar aluno

```http
PUT /alunos/:id
Content-Type: application/x-www-form-urlencoded

nome=João Santos
email=joao.santos@email.com
```

**Resposta (Sucesso - 200):**

```json
{
  "message": "Aluno atualizado com sucesso",
  "aluno": {
    "id": 1,
    "nome": "João Santos",
    "email": "joao.santos@email.com",
    "idade": 20
  }
}
```

**Resposta (Erro - 404):**

```json
{
  "error": "Aluno não encontrado."
}
```

**Resposta (Erro - 409):**

```json
{
  "error": "O email inserido já está sendo utilizado."
}
```

#### Excluir aluno

```http
DELETE /alunos/:id
```

**Resposta (Sucesso - 200):**

```json
{
  "message": "Aluno excluído com sucesso",
  "aluno": {
    "id": 1,
    "nome": "João Santos",
    "email": "joao.santos@email.com",
    "idade": 20
  }
}
```

**Resposta (Erro - 404):**

```json
{
  "error": "Aluno não encontrado."
}
```

### 👨‍🏫 Endpoints - Professores

#### Listar todos os professores
```http
GET /professores
```

**Resposta:**
```json
[
  {
    "id": 1,
    "nome": "Carlos Almeida",
    "email": "carlos.almeida@email.com",
    "idade": 35
  }
]
```

#### Cadastrar novo professor
```http
POST /professores
Content-Type: application/x-www-form-urlencoded

nome=Maria Silva
email=maria@email.com
idade=35
```

**Resposta (Sucesso - 201):**
```json
{
  "message": "Professor criado com sucesso",
  "professor": {
    "id": 2,
    "nome": "Maria Silva",
    "email": "maria@email.com",
    "idade": 35
  }
}
```

**Resposta (Erro - 400):**
```json
{
  "error": "Dados inválidos. Por favor, preencha todos os campos."
}
```

**Resposta (Erro - 409):**
```json
{
  "error": "E-mail já cadastrado."
}
```

#### Atualizar professor
```http
PUT /professores/:id
Content-Type: application/x-www-form-urlencoded

nome=Maria Santos
email=maria.santos@email.com
```

**Resposta (Sucesso - 200):**
```json
{
  "message": "Professor atualizado com sucesso",
  "professor": {
    "id": 2,
    "nome": "Maria Santos",
    "email": "maria.santos@email.com",
    "idade": 35
  }
}
```

**Resposta (Erro - 404):**
```json
{
  "error": "Professor não encontrado."
}
```

**Resposta (Erro - 409):**
```json
{
  "error": "O email inserido já está sendo utilizado."
}
```

#### Excluir professor
```http
DELETE /professores/:id
```

**Resposta (Sucesso - 200):**
```json
{
  "message": "Professor excluído com sucesso",
  "professor": {
    "id": 2,
    "nome": "Maria Santos",
    "email": "maria.santos@email.com",
    "idade": 35
  }
}
```

**Resposta (Erro - 404):**
```json
{
  "error": "Professor não encontrado."
}
```

## 🔧 Scripts Disponíveis

```bash
# Iniciar o servidor
npm start

# Gerar cliente Prisma
npx prisma generate

# Sincronizar banco de dados
npx prisma db push

# Visualizar dados no Prisma Studio
npx prisma studio

# Reset do banco de dados (cuidado!)
npx prisma db reset
```

## 📁 Estrutura do Projeto

```
oficina-ii-capacita/
├── src/
│   ├── controllers/
│   │   ├── AlunoController.js
│   │   └── ProfessorController.js
│   ├── routes/
│   │   ├── alunosRoutes.js
│   │   └── professoresRoutes.js
│   └── server.js
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.js
├── .env
├── package.json
└── README.md
```

## 🚨 Tratamento de Erros

### Códigos de Status HTTP

- `200` - Sucesso (GET, PUT, DELETE)
- `201` - Criado com sucesso (POST)
- `400` - Dados inválidos ou ID inválido
- `404` - Recurso não encontrado
- `409` - Conflito (email já existe)
- `500` - Erro interno do servidor

### Exemplos de Respostas de Erro

#### Dados Inválidos

```json
{
  "error": "Dados inválidos. Por favor, preencha todos os campos."
}
```

#### ID Inválido

```json
{
  "error": "ID inválido."
}
```

#### Email Já Cadastrado

```json
{
  "error": "E-mail já cadastrado."
}
```

#### Email Já Utilizado (Atualização)

```json
{
  "error": "O email inserido já está sendo utilizado."
}
```

#### Aluno Não Encontrado

```json
{
  "error": "Aluno não encontrado."
}
```

#### Professor Não Encontrado

```json
{
  "error": "Professor não encontrado."
}
```

#### Erro Interno

```json
{
  "error": "Erro ao buscar alunos, tente novamente."
}
```



## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Notas de Desenvolvimento

- O projeto utiliza `express.urlencoded()` para leitura de dados de formulário
- Todas as operações do banco são assíncronas
- Validações são feitas tanto no frontend quanto no backend
- Logs de erro são registrados no console para debugging

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte da disciplina Oficina II - Módulo Avançado do Capacita Brasil.

---

Desenvolvido por Daniely Mélo e Gabriel Mozart