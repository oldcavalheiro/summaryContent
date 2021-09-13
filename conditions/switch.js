const sexo = 'mulher'; // mulher ou outro genero qualquer

switch ((sexo.toLowerCase()).trim()) {
  case "homem":
    console.log("Bem-vindo!")
    break; // se o break for esquecido executa até o próximo break
  case "mulher":
    console.log("Bem-vinda!")
    break;
  default: // default == padrão
    console.log("Sem preconceito... Bem-vindo/a!")
};