const { Router } = require('express'); //importa a f router do express
const ProfessorController = require('../controllers/ProfessorController') //importa o controller de alunos

const router = Router() //cria a instancia do router

router.get('/', ProfessorController.listarProfessores) //define a rota para requisições do caminho /

router.post('/', ProfessorController.criarProfessor)

router.put('/:id', ProfessorController.atualizarProfessor)

router.delete('/:id', ProfessorController.deletarProfessor)

module.exports = router;