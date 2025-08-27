const { Router } = require('express'); //importa a f router do express
const AlunoController = require('../controllers/AlunoController') //importa o controller de alunos

const router = Router() //cria a instancia do router

router.get('/', AlunoController.listarAlunos) //define a rota para requisições do caminho /

router.post('/', AlunoController.criarAluno)

router.put('/:id', AlunoController.atualizarAluno)

router.delete('/:id', AlunoController.deletarAluno)

module.exports = router;