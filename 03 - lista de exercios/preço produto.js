/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const descontoDebito = 0.1;
const descontoDinheiroOuPix = 0.15;

const calculaDesconto = (precoInicial, formaPagamento) => {
    let desconto = 0;

    switch (formaPagamento.toLowerCase()) {
        case "débito":
            desconto = descontoDebito;
            return precoInicial - (precoInicial * desconto);
            
        case "dinheiro":
        case "pix":
            desconto = descontoDinheiroOuPix;
            return precoInicial - (precoInicial * desconto);
        case "2x":
            return precoInicial; // Sem desconto ou juros para 2x
        default:
            desconto = descontoDebito;
            return precoInicial + (precoInicial * desconto);
    }

    
}

const mostraPrecoFinal = (precoInicial, formaPagamento) => {
    const precoFinal = calculaDesconto(precoInicial, formaPagamento);
    const descontoOuAcrescimo = precoFinal < precoInicial ? `Desconto: R$ ${(precoInicial - precoFinal).toFixed(2)}.` : `Acréscimo: R$ ${(precoFinal - precoInicial).toFixed(2)}.`;

    return `Forma de pagamento escolhida: ${formaPagamento}.
Valor inicial: R$ ${precoInicial.toFixed(2)}.
${descontoOuAcrescimo}
Valor Final: R$ ${precoFinal.toFixed(2)}`;
}

// Main
(function () {
    console.log(mostraPrecoFinal(85, "12x"));
})();