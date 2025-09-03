const { PrismaClient } = require('../src/generated/prisma');
const prisma = new PrismaClient();
async function main() {
  //array de objetos para tornar mais fácil a inserção de dados
  const criarAlunos = [
    { nome: "João Silva", email: "joao.silva@email.com", idade: 18 },
    { nome: "Maria Souza", email: "maria.souza@email.com", idade: 19 },
    { nome: "Pedro Alves", email: "pedro.alves@email.com", idade: 20 },
    { nome: "Ana Costa", email: "ana.costa@email.com", idade: 21 },
    { nome: "Lucas Fernandes", email: "lucas.fernandes@email.com", idade: 22 },
  ];
  //laço para percorrer os objetos e inserir os dados de cada aluno a cada volta
  for (const aluno of criarAlunos) {
    await prisma.aluno.create({
        data: aluno,
    })
  }
  console.log("Alunos inseridos no registro");

  const criarProfessores = [
    { nome: "Carlos Almeida", email: "carlos.almeida@email.com", idade: 35 },
    { nome: "Mariana Sales", email: "mariana.sales@email.com", idade: 47 },
    { nome: "Junior Santos", email: "junir.santos@email.com", idade: 60 },
    { nome: "Luiza Costa", email: "luiza.costa@email.com", idade: 55 },
    { nome: "Marcos Torres", email: "marcos.torres@email.com", idade: 41 },
  ];
  //laço para percorrer os objetos e inserir os dados de cada professor a cada volta
  for (const professor of criarProfessores) {
    await prisma.professor.create({
        data: professor,
    })
  }
  console.log("Professores inseridos no registro");
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
