import { Button, Card, CardBody, CardText } from 'reactstrap';
import { useState, useEffect } from 'react';
import { getCotacao } from './calculo-gorjeta';

function Resultado(props) {
  const { valorConta, moedaDestino } = props;
  const [cotacao, setCotacao] = useState(null);

  useEffect(() => {
    getCotacao('USD', moedaDestino)
      .then((result) => setCotacao(result))
      .catch((error) => console.error(error));
  }, [moedaDestino]);

  const valorGorjeta = cotacao ? valorConta * cotacao : '';

  return (
    <div>
      <Card>
        <CardBody>
          <CardText>Valor da Conta: ${valorConta} </CardText>
          <CardText>Cambio: {cotacao}</CardText>
        </CardBody>
      </Card>
        {valorGorjeta !== '' && (
          <Card>
            <CardBody>
              <CardText>
                Valor Total da Transação: {new Intl.NumberFormat('en-US', { style: 'currency', currency: moedaDestino }).format(valorGorjeta)}
              </CardText>
            </CardBody>
          </Card>
        )}
      <br/>
      <Button color="secondary" onClick={() => props.onVoltar()}>Voltar</Button>
    </div>
  );
}

export default Resultado;
