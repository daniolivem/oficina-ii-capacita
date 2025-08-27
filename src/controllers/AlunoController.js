const { PrismaClient } = require('../../generated/prisma');
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
                return res.status(400).json({ error: "Dados Inválidos. Por favor, preencha todos os campos." });
            }

            const novoAluno = await prisma.aluno.create({
                data: {
                    nome,
                    email,
                    idade: parseInt(idade),
                },
            });
            return res.status(201).json(novoAluno);

        } catch (error) {
            console.error(error);
            if (error.code === 'P2002') {
                return res.status(409).json({ error: "E-mail já cadastrado." });
            }
            return res.status(500).json({ error: "Erro ao criar aluno. Tente novamente." });
        }
    }
};

module.exports = AlunoController;