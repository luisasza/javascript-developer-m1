
/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

// declara variáveis que vão ser usadas

let n1 = 0;
let n2 = 0;
let n3 = 0;


// função que recebe 3 notas como parâmetros e retorna a média das notas
const calculaMedia = (nota1, nota2, nota3) => {
    n1 = nota1;
    n2 = nota2;
    n3 = nota3;
    return (n1 + n2 + n3) / 3;
}


// função que classifica o Aluno de acordo com sua média
const classificaAluno = (media) => {
    if (media < 0) {
        return `Média ${media.toFixed(2)} não é uma nota válida`;
    }

    let classification;

    switch (true) {
        case media < 5:
            classification = "reprovado(a)";
            break;
        case media > 7:
            classification = "passou direto";
            break;
        default:
            classification = "em recuperação";
    }

    return `Aluno(a) ${classification} com média ${media.toFixed(2)} referente a:
        Nota 1: ${n1.toFixed(2)}
        Nota 2: ${n2.toFixed(2)}
        Nota 3: ${n3.toFixed(2)}`;
}


// Main
(function () {
   
    const media = calculaMedia(3, 3, 10);
    
    console.log(classificaAluno(media));
})();