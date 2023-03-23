import axios from 'axios';

function getCotacao(moedaBase, moedaDestino) {
  return axios.get(`https://api.exchangerate-api.com/v4/latest/${moedaBase}`)
    .then((response) => {
      const cotacao = response.data.rates[moedaDestino];
      if (cotacao) {
        return cotacao;
      } else {
        throw new Error(`Não foi possível obter a cotação para ${moedaBase}/${moedaDestino}.`);
      }
    })
    .catch((error) => {
      throw new Error(`Não foi possível obter a cotação: ${error}`);
    });
}

function calcularCambio() {
  const valorTotal = document.getElementById('valor-total').value;
  const moedaDestino = document.getElementById('moeda-destino').value;
  const cambio = valorTotal

  getCotacao('EUR', moedaDestino)
    .then((cotacao) => {
      const valorCambio = cambio * cotacao;
      const resultado = document.getElementById('resultado');
      resultado.innerHTML = `Valor da gorjeta será de: ${valorCambio.toFixed(2)} ${moedaDestino}`;
    })
    .catch((error) => {
      const resultado = document.getElementById('resultado');
      resultado.innerHTML = error.message;
    });
}

export { calcularCambio,getCotacao };

