const express = require('express');
const alunoRoutes = require('./routes/alunosRoutes')
const app = express(); 
const port = 3000;

//para ler dados em json
app.use(express.json())
//para ler dados via x-form
app.use(express.urlencoded({ extended: true}))

app.use('/alunos', alunoRoutes) //conecta as rotas de alunos ao servidor


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
    console.log(`Acesse: http://localhost:${port}`)

})