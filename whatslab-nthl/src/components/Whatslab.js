import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  height: 98vh;
  width: 42vw;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: #dddae4;
  border-radius: 5px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  justify-self: flex-end;
  position: absolute;
  bottom: 50px;
`;

const BoxDaMensagem = styled.div`
  border-radius: 5px;
  background-color: #b6ed9d;
  margin-bottom: 10px;
  margin-right: 10px;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  max-width: 30vh;
`;

const Input = styled.div`
  position: absolute;
  bottom: 10px;
  width: auto;
`;

const InputPequeno = styled.input`
  height: 6vh;
  width: 6vw;
  border-radius: 5px;
  margin: 0 3px;
  border: 0;
`;

const InputGrande = styled.input`
  height: 6vh;
  width: 28vw;
  border-radius: 5px;
  margin: 0 3px;
  border: 0;
`;

const ButtonEnviar = styled.button`
  height: 6vh;
  width: 6vw;
  border-radius: 5px;
  background-color: white;
  margin: 0 3px;
  border: 0;
  font-weight: bold;
`;

const TextoNegrito = styled.p`
  font-weight: bold;
`;

class Whatslab extends React.Component {
  state = {
    conversas: [],

    valorInputUsuario: "",
    valorInputMensagem: ""
  };

  adicionaConversa = () => {
    const novaConversa = {
      Usuario: this.state.valorInputUsuario,
      Mensagem: this.state.valorInputMensagem
    };

    const novaConversas = [...this.state.conversas, novaConversa];

    this.setState({
      conversas: novaConversas,
      valorInputUsuario: "",
      valorInputMensagem: ""
    });
  };
  apertouEnter = ev => {
    if (ev.key === "Enter") {
      this.adicionaConversa();
    }
  };
  onChangeInputUsuario = event => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = event => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  render() {
    const listaDeComponentes = this.state.conversas.map(conversa => {
      return (
        <BoxDaMensagem>
          <TextoNegrito>{conversa.Usuario}</TextoNegrito>
          <p>{conversa.Mensagem}</p>
        </BoxDaMensagem>
      );
    });

    return (
      <Container>
        <Box>{listaDeComponentes}</Box>
        <Input>
          <InputPequeno
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"}
          />
          <InputGrande
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder={"Mensagem"}
            onKeyDown={this.apertouEnter}
          />
          <ButtonEnviar onClick={this.adicionaConversa}>Enviar</ButtonEnviar>
        </Input>
      </Container>
    );
  }
}

export default Whatslab;
