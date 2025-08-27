const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const AlunoController = {
    async listarAlunos(req, res) {
        try {
            const alunos = await prisma.aluno.findMany();
            return res.status(200).json(alunos);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Erro ao buscar alunos, tente novamente." });
        }
    },

    async criarAluno(req, res) {
        try {
            const { nome, email, idade } = req.body;
            if (!nome || !email || !idade) {
                return res.status(400).json({ error: "Dados inválidos. Por favor, preencha todos os campos." });
            }

            const novoAluno = await prisma.aluno.create({
                data: {
                    nome,
                    email,
                    idade: parseInt(idade),
                },
            });
            
            return res.status(201).json({
                message: "Aluno criado com sucesso",
                aluno: novoAluno
            });

        } catch (error) {
            console.error(error);
            if (error.code === 'P2002') {
                return res.status(409).json({ error: "E-mail já cadastrado." });
            }
            return res.status(500).json({ error: "Erro ao criar aluno. Tente novamente." });
        }
    },
    async atualizarAluno(req, res) {
        try {
            const { id } = req.params; // para extrair o id da url
            const { nome, email } = req.body; // extrai dados do corpo da req

            if (isNaN(parseInt(id))) {
                return res.status(400).json({ error: "ID inválido." });
            }
            
            const alunoAtualizado = await prisma.aluno.update({
                where: {
                    id: parseInt(id) // para converter o id para numero para busca
                },
                data: {
                    nome,
                    email,
                }
            });
            
            return res.status(200).json({
                message: "Aluno atualizado com sucesso",
                aluno: alunoAtualizado
            });
        } catch (error) {
            console.error(error);

            if (error.code === 'P2025') {
                return res.status(404).json({ error: "Aluno não encontrado." });
            }
            if (error.code === 'P2002') {
                return res.status(409).json({ error: "O email inserido já está sendo utilizado." });
            }
            return res.status(500).json({ error: "Erro ao tentar atualizar dados." });
        }
    },
    async deletarAluno(req, res) {
        try {
            const { id } = req.params;

            if (isNaN(parseInt(id))) {
                return res.status(400).json({ error: "ID inválido." });
            }
            
            const alunoExcluido = await prisma.aluno.delete({
                where: {
                    id: parseInt(id),
                }
            });
            
            return res.status(200).json({
                message: "Aluno excluído com sucesso",
                aluno: alunoExcluido
            });
        } catch (error) {
            console.error(error);
            
            if (error.code === 'P2025') {
                return res.status(404).json({ error: "Aluno não encontrado." });
            }
            return res.status(500).json({ error: "Erro ao tentar excluir aluno." });
        }
    }
};

module.exports = AlunoController;