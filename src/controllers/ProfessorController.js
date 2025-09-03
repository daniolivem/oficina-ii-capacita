const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const ProfessorController = {
    async listarAlunos(req, res) {
        try {
            const professores = await prisma.professor.findMany();
            return res.status(200).json(professores);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Erro ao buscar professores, tente novamente." });
        }
    },

    async criarProfessor(req, res) {
        try {
            const { nome, email, idade } = req.body;
            if (!nome || !email || !idade) {
                return res.status(400).json({ error: "Dados inválidos. Por favor, preencha todos os campos." });
            }

            const novoProfessor = await prisma.professor.create({
                data: {
                    nome,
                    email,
                    idade: parseInt(idade),
                },
            });
            
            return res.status(201).json({
                message: "Professor criado com sucesso",
                aluno: novoProfessor
            });

        } catch (error) {
            console.error(error);
            if (error.code === 'P2002') {
                return res.status(409).json({ error: "E-mail já cadastrado." });
            }
            return res.status(500).json({ error: "Erro ao criar professor. Tente novamente." });
        }
    },
    async atualizarProfessor(req, res) {
        try {
            const { id } = req.params; // para extrair o id da url
            const { nome, email } = req.body; // extrai dados do corpo da req

            if (isNaN(parseInt(id))) {
                return res.status(400).json({ error: "ID inválido." });
            }
            
            const professorAtualizado = await prisma.professor.update({
                where: {
                    id: parseInt(id) // para converter o id para numero para busca
                },
                data: {
                    nome,
                    email,
                }
            });
            
            return res.status(200).json({
                message: "Professor atualizado com sucesso",
                aluno: professorAtualizado
            });
        } catch (error) {
            console.error(error);

            if (error.code === 'P2025') {
                return res.status(404).json({ error: "Professor não encontrado." });
            }
            if (error.code === 'P2002') {
                return res.status(409).json({ error: "O email inserido já está sendo utilizado." });
            }
            return res.status(500).json({ error: "Erro ao tentar atualizar dados." });
        }
    },
    async deletarProfessor(req, res) {
        try {
            const { id } = req.params;

            if (isNaN(parseInt(id))) {
                return res.status(400).json({ error: "ID inválido." });
            }
            
            const professorExcluido = await prisma.professor.delete({
                where: {
                    id: parseInt(id),
                }
            });
            
            return res.status(200).json({
                message: "Professor excluído com sucesso",
                aluno: professorExcluido
            });
        } catch (error) {
            console.error(error);
            
            if (error.code === 'P2025') {
                return res.status(404).json({ error: "Professor não encontrado." });
            }
            return res.status(500).json({ error: "Erro ao tentar excluir professior." });
        }
    }
};

module.exports = ProfessorController;