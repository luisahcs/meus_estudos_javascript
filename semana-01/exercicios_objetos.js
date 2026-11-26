/*Exercício 1 - Perfil
Crie um objeto que represente uma pessoa.
Deve conter:
  nome
  idade
  profissão
Mostre cada informação separadamente*/

const pessoa =
{
  nome: "Luisa",
  idade: 22,
  profissao: "Assistente"
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissao);

//-----------------------------------------------------------------//

/*Exercício 2 - Filme Favorito
Crie um objeto chamado filme.
Propriedades:
  título
  ano
  gênero
Mostre apenas o título.*/

const filme = 
{
  titulo: "Titanic",
  ano: 1900,
  genero: "Drama"
};

console.log(filme.titulo);

//-----------------------------------------------------------------//

/*Exercício 3 - Produto

Crie um objeto representando um produto.

Propriedades:

nome
preço
estoque

Mostre o preço do produto.*/

const produto = 
{
  nome: "borracha",
  preco: 2.95,
  estoque: 100
};

console.log(produto.preco);

//-----------------------------------------------------------------//

/*Exercício 4 - Alteração

Crie um objeto chamado livro.

Depois de criar:

altere o número de páginas
exiba o objeto completo*/

const livro =
{
  nome: "A culpa é das estrelas",
  num_pag: 100,
  genero: "drama"
};

livro.num_pag = 150;

console.log(livro);

//-----------------------------------------------------------------//

/*Exercício 5 - Funcionário

Crie um objeto com:

nome
cargo
salário

Mostre uma frase contendo as três informações.*/

const funcionario =
{
  nome: "Luisa",
  cargo: "Programadora",
  salario: 2300
};

console.log("O(A) funcionário(a) destaque do mês foi " + funcionario.nome + ", que trabalha como " + funcionario.cargo + " e recebe R$" + funcionario.salario + " por mês. Parabéns, " + funcionario.nome + "!!!")
//na próxima, vou adicionar sexo nas informaçoes e fora vou fazer um if. se for homem, "o funcionario", se for mulher "a funcionaria"

//-----------------------------------------------------------------//

/*Exercício 6 - Curso

Crie um objeto representando um curso.

Informações:

nome
carga horária
quantidade de alunos
ativo

Mostre todas as propriedades.*/

const curso =
{
  nome: "Engenharia de Software",
  carga_horaria: 7200,
  qtd_alunos: 40,
  ativo: true
};

console.log(curso)

//-----------------------------------------------------------------//

/*Exercício 7 - Carro

Crie um objeto representando um carro.

Depois:

altere a cor
altere o ano
exiba o objeto atualizado*/

const carro =
{
  modelo: "Civic",
  marca: "Honda",
  ano: 2010,
  cor: "prata",
  modelo_marcha: "automatico"
};

carro.cor = "champagne";
carro.ano = 2011;

console.log(carro);

  
