const listaDeUsuarios = [];
let tel = "";
function maskTel(e) {
  return ["estou retornando a validação 0", "estou retornando a validação 1"][
    Number(!!e)
  ];
}
console.log(maskTel(tel));
