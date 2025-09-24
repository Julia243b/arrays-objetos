/* 1 - Criar e Iterar sobre um Array */
const numero = [7, 5, 27, 15, 98];

numero.forEach((numero) => {
    console.log(numero);
});


/* 2 - Manipular um Array */
const frutas = ["maça", "banana", "laranja"];
console.log("Array inicial:", frutas);

frutas.push("uva");
console.log("Array manipulado, após adicionar uma nova fruta no final:", frutas);

frutas.shift();
console.log("Array após remover a primeira fruta:", frutas);


/* 3 - Filtragem de Array */
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array original:", numeros);

const numerosPares = numeros.filter(numero => numero % 2 === 0);

console.log("Numeros pares:", numerosPares);


/* 4 - Encontrar o Maior Valor */
const valores = [28, 49, 97, 50, 81, 7, 33];
console.log("Valores aleatórios:", valores);

const maiorValor = Math.max(...valores);
console.log("O maior valor é:", maiorValor);


/* 5 - Soma dos Elementos */
const numerosE = [28, 97, 33, 54, 88, 45, 22, 15, 60];
console.log(numerosE);

let soma = 0;
for (let i = 0; i < numerosE.length; i++) {
    soma += numerosE[i];
}
console.log("A soma de todos os números é:", soma);


/* 6 - Criar e Acessar um Objeto */
const pessoa = {
    nome: "Jung Kook",
    idade: 28,
    profissao: "Cantor sul-coreano",
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissao);
console.log(`Este é o ${pessoa.nome}. Ele tem ${pessoa.idade} anos e é ${pessoa.profissao}.`);


/* 7 - Modificar um Objeto */
const carro = {
    marca: "Smart",
    modelo: "Smart Fortwo",
    ano: 2008
};

console.log("Objeto inicial:");
console.log(`Marca: ${carro.marca}`);
console.log(`Modelo: ${carro.modelo}`);
console.log(`Ano: ${carro.ano}`);

carro.ano = 2025;

// console.log("Objeto após a atualização:", carro);
console.log("Objeto após a atualização:"); 
console.log(`Marca: ${carro.marca}`);
console.log(`Modelo: ${carro.modelo}`);
console.log(`Ano: ${carro.ano}`);


/* 8 - Adicionar Propriedade ao Objeto */
const livro = {
    título: "Beyond The Story: Uma história dos 10 anos de BTS",
    autor: "BTS, com contribuições de Myeongseok Kang",
}
console.log("Objeto antes de adicionar propriedade:", livro);

livro.anoDePublicacao = 2023;
console.log("Adicionado propriedade:", livro);


/* 9 - Iterar sobre as Propriedades de um Objeto */
const produto = {
    nome: "Light Stick",
    preco: 599,
    quantidade: 7,
};

for (const key in produto) {
    // console.log(key);
    // console.log(produto[key]);
    //console.log(`Propriedade: ${key} | Valor: ${produto[key]}`);
    console.log(`${key} : ${produto[key]}`);
};


/* 10 - Função para Exibir um Objeto */
const estudante = {
    nome: "Julia",
    idade: 18,
    curso: "Desenvolvimento web",
    area: "Front-end",
}

function exibirEstudante(estudante) {
    console.log(`A estudante ${estudante.nome} tem ${estudante.idade} anos e está cursando ${estudante.curso} com foco em ${estudante.area}.`);
}
exibirEstudante(estudante);


/* 11 - Array de Objetos */
const livros = [
    { titulo: "Beyond the Story: Uma história dos 10 anos de BTS", autor: "BTS, com contribuições de Myeongseok Kang", anoDePublicacao: 2023 },
    { titulo: "BTS - Reis do K-pop", autor: "Helen Brown", anoDePublicacao: 2019 },
    { titulo: "As regras do jogo", autor: "Arquelana", anoDePublicacao: 2024 },
    { titulo: "Harry Potter", autor: "J. K. Rowling", anoDePublicacao: 1999 },
];

livros.forEach((livros) => {
    console.log(`Titulo do livro:`, livros.titulo);
});


/* 12 - Atualizar Valores de Objetos em um Array */
const carros = [
    { marca: "Chevrolet", modelo: "Camaro", ano: 1970 },
    { marca: "Smart", modelo: "Smart Fortwo", ano: 2008 },
    { marca: "Hyundai", modelo: "HB20 ", ano: 2021 },
    { marca: "BMW Série 4 Cabrio", modelo: "BMW", ano: 2020 }
];

console.log("Array de carros antes da atualização:");
console.log(carros);

carros.forEach((carros) => {
    carros.ano = 2025
});

console.log("Array dos carros após a atualização:");
console.log(carros);


/* 13: Encontrar um Objeto em um Array */
const pessoas = [
    { nome: "Lee Dong Min", idade: 28, cidade: "Gunpo" },
    { nome: "Jimin", idade: 29, cidade: "Busan" },
    { nome: "Jung Hae in", idade: 37, cidade: "Seul" },
    { nome: "Jisoo", idade: 30, cidade: "Snbon-dong" },
    { nome: "Jackie Chan", idade: 71, cidade: "Victoria Peak" },
    { nome: "Hyun Bin", idade: 42, cidade: "Seul" },
    { nome: "Jenna Ortega", idade: 22, cidade: "Palm Desert" },
];

console.log("Dados de pessoas:", pessoas);

let pessoaEncontrada = null;

for (const pessoa of pessoas) {
    if (pessoa.idade > 30) {
        if (pessoaEncontrada === null || pessoa.idade > pessoaEncontrada.idade) {
            pessoaEncontrada = pessoa;
        }
    }
}

if (pessoaEncontrada) {
    console.log("Pessoa encontrada com mais de 30 anos:", pessoaEncontrada.nome);
} 