function email_error_message() {
  const formEmail = "medina";
  const dictionary = [
    {
      condition: "medina",
      message: "Campo obrigatório",
    },
    {
      condition: "andre",
      message: "E-mail inválido!",
    },
    {
      condition: "rogerio",
      message: "E-mail inválido!",
    },
  ];
  const error = dictionary.filter((e) => e.condition === "medina");
  return ["", error[0]?.message][Number(!!formEmail)];
}
console.log(email_error_message());
