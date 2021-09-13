// syntax:
// let { key } = Object
// let [ arrayElement ] = arrayName

// Exemplo 1: basic object
const Tv = {
  'price': '1899.05',
  seller: 'Amazon',
};

// creating new key with default value for Tv object
const { size = '24pol' } = Tv;

let { price, seller } = Tv;
console.log(price); // 1899.05
console.log(seller); // Amazon
console.log(size);

// Exemplo 2: array
console.log(`\nExemplo 2: array`);
const arrayCountries = ['0Brazil', '1Japan', '2USA'];

const [firstCountry, secondCountry, thirdCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // USA

// Exemplo 3: swap arrays
const assert = require('assert');

const myList = [1, 2, 3];
const swap = ([a, b, c]) => [c, b, a];

const swappedList = swap(arrayCountries);

assert.strictEqual(swappedList[0], '2USA');
assert.strictEqual(swappedList[1], '1Japan');
assert.strictEqual(swappedList[2], '0Brazil');

// Exemplo 4: valores apareçam nas variáveis do tipo
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
console.log(comida, animal, bebida); // arroz gato água

// Exemplo 5: objects inside objects
console.log(`\nExemplo 3: objects inside objects`);
const casa = {
  quarto: {
    cama: {
      travesseiro: 'Fofinho'
    }
  },
  sala: {
    sofa: {
      almofada: 'top de linha',
      encosto: 'macio'
    }
  },
  cozinha: {
    geladeira: 'cheia',
    fogão: {
      acender: () => console.log('E fez-se o fogo!'),
      apagar: '',
      cozinhar: {}
    }
  },
  banheiro: '',
};

const {
  quarto: { cama: { travesseiro }, cama },
  sala: { sofa: { encosto, almofada } },
  cozinha: {
    geladeira,
    fogão: { acender }
  },
  sala,
  cozinha
} = casa

acender();
console.log(sala);
console.log(cama);

console.log(encosto);
console.log(almofada);
console.log(travesseiro);


// Exemplo 6: multiple objects (same key:value)
const lion = {
  name: 'Panthera leo',
  commonName: 'Lion',
  weightRange: {
    min: 186.55,
    max: 225,
    measurementUnit: 'kg',
  },
};

const blueWhale = {
  name: 'Balaenoptera musculus',
  commonName: 'Blue whale',
  weightRange: {
    min: 45,
    max: 173,
    measurementUnit: 't',
  },
};

const polarBear = {
  name: 'Ursus maritimus',
  commonName: 'Polar Bear',
  weightRange: {
    min: 350,
    max: 700,
  },
};

function animalDescription(
  { weightRange: { min, max, measurementUnit = 'kg' }, name, commonName },
) {
  return `${commonName} (${name}) weighs around ${min}-${max} ${measurementUnit}`;
}
console.log(animalDescription(lion));
console.log(animalDescription(blueWhale));
console.log(animalDescription(polarBear));
