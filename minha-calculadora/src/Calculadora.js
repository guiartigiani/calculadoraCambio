import React, { useState } from 'react';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { calcularCambio } from './calculo-gorjeta';
import Resultado from './Resultado';



const Calculadora = () => {
  const [valorTotal, setValorTotal] = useState('');
  const [moedaDestino, setMoedaDestino] = useState('USD');
  const [exibirResultado, setExibirResultado] = useState(false);
  const [valorCambio, setValorCambio] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const valor = parseFloat(valorTotal);
    const valorConvertido = calcularCambio(valor, moedaDestino);

    setValorCambio(valorConvertido);
    setExibirResultado(true)};
  
    const handleVoltar = () => {
    setExibirResultado(false);
    setValorTotal('');
};

  


  return (
    <Container className="my-5">
      <Row>
        <Col>
          {exibirResultado ? (
            <Resultado moedaDestino={moedaDestino} valorConta = {valorTotal} onVoltar={handleVoltar}/>
          ) : (
            <Form onSubmit={handleSubmit}>
              <h1 className="mb-4">Calculadora de Cambio (USD)</h1>
              <FormGroup>
                <Label for="valor-total">Valor Total:</Label>
                <Input type="number" step="0.1" name="valor-total" id="valor-total" value={valorTotal} onChange={(e) => setValorTotal(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Label for="moeda-destino">Moeda de Destino:</Label>
                <Input type="select" name="moeda-destino" id="moeda-destino" value={moedaDestino} onChange={(e) => setMoedaDestino(e.target.value)}>
                  <option value="EUR">EUR (€)</option>
                  <option value="JPY">JPY (¥)</option>
                  <option value="ARS">ARS</option>
                  <option value="CLP">CLP</option>
                  <option value="AUD">AUD (A$)</option>
                  <option value="EGP">EGP</option>
                  <option value="INR">INR (₹)</option>
                  <option value="BRL">BRL (R$)</option>
                </Input>
              </FormGroup>
              <Button type="submit" color="primary" className="mr-3">
                Calcular
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
 );
};

export default Calculadora;