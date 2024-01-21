let precoCombustivel = 10;
const consumoCombustivelPorKm = 10;
let distanciaPercorridaEmKm = 100;
let valorTotalGasto = (distanciaPercorridaEmKm / consumoCombustivelPorKm) * precoCombustivel;

console.log(`Esta viagem custará R$ ${valorTotalGasto.toFixed(2)}`);