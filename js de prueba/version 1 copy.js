const btc = 2;
const dolar = 1;
let mensaje = document.getElementById("mensaje");
// se recomienda segun internet trabajar en centavos
const dolar_btc = (a) => a * btc;
const comisiondolar = (a) => {
  let multiplicacion = a * 0.0015;
  let resultado = a - multiplicacion;
  return Number(resultado.toFixed(4));
};

const btc_dolar = (a) => a / btc;
const comisionbtc = (a) => {
  let multiplicacion = a * 0.003;
  let resultado = a - multiplicacion;
  return Number(resultado.toFixed(4));
};

const recargaPagina = (a = `NOS VEMOS EN OTRA OCASIÓN`) => {
  alert(a);
  location.reload();
};

let primerpaso = confirm(
  `Bienvenido a la casa de cambio. 
    Nuestra comision para convertir dolar a clp es del 1.5% , 
    Para convertir clp a dolar es del 3%
    (esta siempre se cobrara sobre el valor dolar)
     `
);

if (primerpaso == false) {
  recargaPagina();
} // el problema esta aca, si pongo cancelar al confirm, aun asi sigue recorriendo el codigo
// si pusiera un console.log antes de la linea 21, el mensaje es enviado a la consola sin problemas, aun asi no recarga
let desicion = Number(
  prompt(
    `Que quiere hacer
    1) Comprar desde dolar a BTC
    2) Comprar desde BTC a dolar`,
    " Ej: 1 "
  )
);

switch (desicion) {
  case 1: {
    let monto = Number(prompt("Ingrese monto"));
    if (!monto) {
      recargaPagina(`Monto invalido intente nuevamente`);
      break;
    }
    let montoCompra = comisiondolar(dolar_btc(monto));
    let confirmacion = confirm(`Esta seguro que quiere comprar ${montoCompra} BTC?`);
    if (!confirmacion) {
      recargaPagina(`OPERACION CANCELADA`);
      break;
    }
    alert(`Usted a comprado ${montoCompra} BTC`);
    console.log(`Usted a comprado ${montoCompra} BTC`);
    mensaje.textContent = `FELICIDADES. Usted a comprado ${montoCompra} BTC`;
    break;
  }
  case 2: {
    let monto = Number(prompt("Ingrese monto"));
    if (!monto) {
      recargaPagina(`Monto invalido intente nuevamente`);
      break;
    }
    let montoCompra = comisionbtc(btc_dolar(monto));
    let confirmacion = confirm(`Esta seguro que quiere comprar ${montoCompra} dolares?`);
    if (!confirmacion) {
      recargaPagina(`OPERACION CANCELADA`);
      break;
    }
    alert(`Usted a comprado ${montoCompra} dolares`);
    console.log(`Usted a comprado ${montoCompra} dolares`);
    mensaje.textContent = `FELICIDADES. Usted a comprado ${montoCompra} dolares`;
    break;
  }

  default:
    recargaPagina(`Opcion invalida, intente en otra ocasión`);
}
