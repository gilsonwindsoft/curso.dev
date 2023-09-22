function somar(numero1, numero2) {
  if (typeof numero1 !== "number" || typeof numero2 !== "number") {
    return "Erro";
  } else {
    return numero1 + numero2;
  }
}

function dividir(numero1, numero2) {
  if (typeof numero1 !== "number" || typeof numero2 !== "number") {
    return "Erro";
  } else {
    return numero1 / numero2;
  }
}

exports.somar = somar;
exports.dividir = dividir;
