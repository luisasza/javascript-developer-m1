// declara as variáveis
let precoCombustivel = 0;
let consumoCombustivel = 0;

// cria a função que calcula o valor da viagem
const calculaValorViagem = (distanciaViagem) => (distanciaViagem / consumoCombustivel) * precoCombustivel;
  
// cria a função que seleciona Gasolina ou Etanol
const gasolinaOuEtanol = (combustivel, distanciaViagem) => {

  switch (combustivel.toLowerCase()) {
    
    case "etanol":
      precoCombustivel = 4.88;
      consumoCombustivel = 10;
      return `Combustível: ${combustivel}.
      Valor da viagem: R$ ${calculaValorViagem(distanciaViagem).toFixed(2)}`;
    case "gasolina":
      precoCombustivel = 5.88;
      consumoCombustivel = 8;
      return `Combustível: ${combustivel}.
      Valor da viagem: R$ ${calculaValorViagem(distanciaViagem).toFixed(2)}`;
    default:
      return `Combustível: ${combustivel} não reconhecido`;
  }

}

// Main
(function () {
  
  console.log(gasolinaOuEtanol("etanol", 200));
})();