// return or receive functions as parameter

// Example:
const showMessage = (resultado) => console.log(resultado);

const funcSum = (num1, num2, callBack) => {
  const sum = num1 + num2;

  // when get here go to callBack
  callBack(sum); // callBack === sum as param)
}

// first execute funcSum
// showMessage receive callBack from funcSum as param
funcSum(10, 8, showMessage);

const wakeUp = () => 'time to wakeup!!';
const takeCoffee = () => 'Lets drink some coffes!!';
const goSleep = () => 'I am tired!';

// Example 2:
const doWhat = (callback) => {
  const result = callback();
  console.log(result);
};

doWhat(wakeUp);
doWhat(takeCoffee);
doWhat(goSleep);

// Example 3:
// Execute callback numTimes
const repeat = (numTimes, callback) => {
  for (let count = 0; count < numTimes; count += 1) {
    callback(count);
  }
};

repeat(3, (iteration) => {
  console.log(`Olá, pessoal! Esta é a ${iteration} iteração!`);
});

const numbers = [1000, 2000, 3000, 4000];
repeat(numbers.length, (index) => {
  console.log(numbers[index]);
})

// Example 4:
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 2000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = callBack => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    console.log(callBack(user));
  }, delay());
};

getUser(userFullName);
getUser(userNationality);