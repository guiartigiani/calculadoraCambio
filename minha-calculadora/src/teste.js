import axios from 'axios';

const moedaBase = 'USD';

axios.get(`https://api.exchangerate-api.com/v4/latest/${moedaBase}`)
  .then((response) => {
    const json = response.data;
    console.log(json);
  })
  .catch((error) => {
    console.error(error);
  });
