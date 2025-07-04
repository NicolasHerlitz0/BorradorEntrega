// 1) Crear objeto estatico con las diferentes monedas, nombre y precio
const divisas = [
{name: "BTC", valor: 2},
{name: "ETH", valor: 4},
{name: "LIT", valor: 0.5},
]

// llamando a nombre y llamando a valor
console.log(divisas[0]["name"])
console.log(divisas[0]["valor"])

// 2) Crear dos prompt y luego entrar al swich
const conjuntoDesiciones = {
    tipoDeCambio:  null,
    tipoDecrypto:  null
}
let decision;
let numeroDeDecision;
do {
decision = prompt(
    `Que quiere hacers
    1) Comprar desde dolar a BTC
    2) Comprar desde BTC a dolar`,
    " Ej: 1 "
  )
;
if (decision == null) {
  recargarPagina();
  break;
}
 numeroDeDecision = Number(decision)
switch (numeroDeDecision) {
  case 1: 
    operacionDeCambio("Dolar", dolar_btc, comisionDolar, "BTC");
    break;
  
  case 2: 
    operacionDeCambio("BTC", btc_dolar, comisionBtc, "Dolar");
    break;

}
} while (numeroDeDecision !== 1 && numeroDeDecision !== 2)