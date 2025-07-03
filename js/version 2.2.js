// constantes
const dolar = 1;
const btc = 2;
const mensaje = document.getElementById("mensaje");
//funciones
const dolar_btc = (a) => a * btc;
const comisionDolar = (a) => {
  const multiplicacion = a * 0.015;
  const resultado = a - multiplicacion;
  return Number(resultado.toFixed(4));
};

const btc_dolar = (a) => a / btc; // Este lo puedo cambiar, la comicion iria antes que el btc.
const comisionBtc = (a) => {
  const multiplicacion = a * 0.03;
  const resultado = a - multiplicacion;
  return Number(resultado.toFixed(4));
};

const recargarPagina = (a = "NOS VEMOS EN OTRA OCASIÓN") => {
  alert(a);
  location.reload();
};

function operacionDeCambio(nombreMoneda1, conversion, comision, nombreMoneda2) {
  let monto;
  do {
    let entrada = prompt("Ingrese un monto:");
    if (entrada === null) {
      recargarPagina(`Hasta pronto!`);
      return;
    }
    monto = Number(entrada);
  } while (!monto);

  const montocompra = comision(conversion(monto));
  const confirmacion = confirm(
    `¿Esta seguro que quiere comprar ${montocompra} ${nombreMoneda2} por ${monto} ${nombreMoneda1}?`
  );

  if (!confirmacion) {
    recargarPagina("Operacion cancelada");
    return;
  }

  alert(`Usted ha comprado ${montocompra} ${nombreMoneda2}`);
  console.log(`Usted ha comprado ${montocompra} ${nombreMoneda2}`);
  mensaje.textContent = `FELICIDADES! Usted ha comprado ${montocompra} ${nombreMoneda2}`;
}

// inicio de programa
const primerPaso = confirm(
  `Bienvenido a la casa de cambio. 
Nuestra comisión para convertir dólar a BTC es del 1.5%. 
Para convertir BTC a dólar es del 3%.
(Esta siempre se cobrará sobre el valor en dólares)`
);

if (!primerPaso) {
  recargarPagina();
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
