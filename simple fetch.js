// required for use console.log in VSCode
const fetch = require('node-fetch');

/*/ function async/await
const fetchDataFromApi = async () => {
  const dataFromApi = await fetch("https://api.mercadolibre.com/sites/MLB/search?q=computador");
  const dataJson = await dataFromApi.json();
  return dataJson;
} */

// .then
function fetchDataFromApi() {
  return fetch("https://api.mercadolibre.com/sites/MLB/search?q=computador")
    .then((response) => response.json())
}

/*/ async function waitData() {
  console.log(await fetchDataFromApi());
};
waitData(); /*/

fetchDataFromApi()
  .then((result) => console.log(result));
