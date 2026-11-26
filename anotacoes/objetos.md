o básico da programação diz:

let nome = "Luisa";
let idade = 30;
let cargo = "Assistente";

porém, se tiver 10000 alunos, não é viável criar uma variável pra cada aluno
(nome1, idade1, cargo1); (nome2, idade2, cargo2)...

o conceito de >OBJETO< resolve o problema acima;
  * permite agrupar informações relacionadas

ex.: 
  const aluno = 
  {
    nome: "Luisa",
    idade: 30,
    curso: "JavaScript"
  };

  agora se tem uma única variável (aluno), que contém várias informações (nome, idade, curso)

  nome do objeto = aluno
  variáveis são propriedades
  para acessá-las, utilizamos "."
    ex.:
        aluno.nome
        aluno.idade
------------------------------------------------------------------------------------------------
EXEMPLOS DE OBJETO:

USUÁRIO
const usuario = {
  nome: "Luisa",
  email: "luisa@email.com",
  pontuacao: 150
};

CURSO
const curso = {
  titulo: "JavaScript Básico",
  cargaHoraria: 20,
  nivel: "Iniciante"
};

AULA
const aula = {
  titulo: "Objetos",
  duracao: 15,
  concluida: true
};
------------------------------------------------------------------------------------------------
