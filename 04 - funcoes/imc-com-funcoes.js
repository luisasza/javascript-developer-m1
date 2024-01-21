/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

// Declara variáveis para peso e altura
let p = 0;
let a = 0;

// Cria função que calcula e retorna o IMC
const calcularImc = (peso, altura) => peso / (altura ** 2);

// Cria função que retorna a classificação do IMC
const classificarImc = (imc) => {
    if (imc <= 0) {
        return `IMC de ${imc.toFixed(2)} não é um número válido`;
    }

    let label;

    switch (true) {
        case (imc < 18.5):
            label = 'abaixo do peso';
            break;
        case (imc < 25):
            label = 'normal';
            break;
        case (imc < 30):
            label = 'acima do peso';
            break;
        case (imc < 40):
            label = 'obeso';
            break;
        default:
            label = 'obesidade grave';
    }

    return `IMC de ${imc.toFixed(2)} é considerado ${label}.`;
};

// Main
(function () {
    p = 90;
    a = 1.75;

    const imc = calcularImc(p, a);
    console.log(classificarImc(imc));
})();