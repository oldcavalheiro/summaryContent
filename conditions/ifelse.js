
// if (condição === true) { faça } else { faça };

// Exemplo 1:
const number = Math.floor(Math.random() * 10); // aleatorio 1 ou 2

if (number > 5) {
  console.log(number + "grande");
} else {
  console.log(number + "pequeno");
};

// Exemplo 2: (if dentro de if)
let age = 18;



if (age != null && age != '') {
  if ((age >= 0 && age < 6) || age >= 60) {
    console.log("grátis, criança ou idoso");
  } else if (age >= 6 && age < 18) {
    console.log("R$12,50 estudante menor de 18");
  } else if (age >= 18 && age < 60) {
    console.log("R$25,00 adulto");
  } else {
    console.log("digite à idade como número positivo");
  }
} else {
  console.log("campo não preenchido");
};