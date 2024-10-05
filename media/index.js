// let nota1 = 5
// let nota2 = 7
// let nota3 = 9

let notas = [5, 7, 9, 10, 15]
// notas[0] // 5
// notas[1] // 7
// notas[2] // 9
// notas[3] // 10

let soma = 0;

// for (valor inicial; condição; incremento/decremento)
for (let index = 0; index < notas.length; index += 1) {
    soma += notas[index];
}

let media = soma / notas.length;

if (media >=7) {
    console.log("Aluno aprovado com média " + media);
}else {
    console.log("Aluno reprovado com média " + media);
}